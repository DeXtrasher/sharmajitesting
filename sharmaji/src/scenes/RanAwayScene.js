
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RanAwayScene extends Phaser.Scene {

	constructor() {
		super("RanAwayScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(640, 360, "finalbackground");
		background.scaleX = 0.6717973021050935;
		background.scaleY = 0.6717973021050935;

		// blackOverlay
		const blackOverlay = this.add.rectangle(640, 360, 128, 128);
		blackOverlay.scaleX = 10.15;
		blackOverlay.scaleY = 5.8;
		blackOverlay.isFilled = true;
		blackOverlay.fillColor = 0;

		this.background = background;
		this.blackOverlay = blackOverlay;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Rectangle} */
	blackOverlay;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

		this.socket = data.socket; // Get the socket from HitScene
		this.roomCode = data.roomCode;
		this.hitCount = data.hitCount;
		this.maxCombo = data.maxCombo;
		this.finalScore = data.finalScore;

	}

	create() {

		this.editorCreate();

		this.runningUnconscious = this.sound.add('runningUnconscious', { volume: 0.85 });
		this.wakeUp = this.sound.add('wakeUp', { volume: 0.9 });
		this.policeCar = this.sound.add('policeCar', { volume: 0.6 });

		this.wakeUp.play();

		this.time.delayedCall(200, () => {
			this.runningUnconscious.play();
			this.time.delayedCall(1850, () => {
				this.policeCar.play();
			});
		});

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		console.log("He ran away! LOL");
		this.ending = 'ranaway';

		this.tweens.add({
			targets: this.blackOverlay,
			alpha: 0,
			duration: 500,
			onComplete: () => {
				this.blackOverlay.setVisible(false);
			}
		});

		this.time.delayedCall(6500, () => {
			this.socket.off("phone_disconnected");
			this.scene.start('ResultsScene', { socket: this.socket, 
			roomCode: this.roomCode, 
			hitCount: this.hitCount, 
			maxCombo: this.maxCombo, 
			finalScore: this.finalScore,
			ending: this.ending });
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
