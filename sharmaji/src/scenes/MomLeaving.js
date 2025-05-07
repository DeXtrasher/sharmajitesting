
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MomLeaving extends Phaser.Scene {

	constructor() {
		super("MomLeaving");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(640, 360, "bgplain");
		background.scaleX = 0.67;
		background.scaleY = 0.67;

		// shadows
		const shadows = this.add.image(640, 360, "shadows");
		shadows.scaleX = 0.67;
		shadows.scaleY = 0.67;

		// almirahs
		const almirahs = this.add.image(640, 360, "almirahs");
		almirahs.scaleX = 0.67;
		almirahs.scaleY = 0.67;

		// shelf
		const shelf = this.add.image(640, 360, "shelf");
		shelf.scaleX = 0.67;
		shelf.scaleY = 0.67;

		// chair
		const chair = this.add.image(640, 360, "chair");
		chair.scaleX = 0.67;
		chair.scaleY = 0.67;

		// tablept1
		const tablept1 = this.add.image(640, 360, "tablept1");
		tablept1.scaleX = 0.67;
		tablept1.scaleY = 0.67;

		// kid
		const kid = this.physics.add.sprite(746, 377, "neutralstudy", 0);
		kid.scaleX = 0.68;
		kid.scaleY = 0.68;
		kid.body.setSize(800, 800, false);
		kid.play("neutralstudy");

		// tablept2
		const tablept2 = this.add.image(636, 356, "tablept2");
		tablept2.scaleX = 0.67;
		tablept2.scaleY = 0.67;

		// momCharacter
		const momCharacter = this.physics.add.sprite(-130, 360, "momwalksleft", 0);
		momCharacter.scaleX = 0.68;
		momCharacter.scaleY = 0.68;
		momCharacter.body.setSize(800, 800, false);
		momCharacter.play("");

		// blackoverlay
		const blackoverlay = this.add.rectangle(640, 360, 128, 128);
		blackoverlay.scaleX = 10.05;
		blackoverlay.scaleY = 5.65;
		blackoverlay.visible = false;
		blackoverlay.isFilled = true;
		blackoverlay.fillColor = 0;

		this.background = background;
		this.shadows = shadows;
		this.almirahs = almirahs;
		this.shelf = shelf;
		this.chair = chair;
		this.tablept1 = tablept1;
		this.kid = kid;
		this.tablept2 = tablept2;
		this.momCharacter = momCharacter;
		this.blackoverlay = blackoverlay;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	shadows;
	/** @type {Phaser.GameObjects.Image} */
	almirahs;
	/** @type {Phaser.GameObjects.Image} */
	shelf;
	/** @type {Phaser.GameObjects.Image} */
	chair;
	/** @type {Phaser.GameObjects.Image} */
	tablept1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	kid;
	/** @type {Phaser.GameObjects.Image} */
	tablept2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	momCharacter;
	/** @type {Phaser.GameObjects.Rectangle} */
	blackoverlay;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket from HitScene
		this.roomCode = data.roomCode;
		this.momPosition = data.momPosition;
		this.hitCount = data.hitCount;
		this.maxCombo = data.maxCombo;
		this.finalScore = data.finalScore;

    }

	create() {

		this.editorCreate();

		this.momAngry = this.sound.add('momAngry', { volume: 1 });
		this.momFootsteps = this.sound.add('momFootsteps', { volume: 0.9 });
		this.momAndSonFootsteps = this.sound.add('momAndSonFootsteps', { volume: 0.9 });
		this.cameraClick = this.sound.add('cameraClick', { volume: 1 });

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		this.ending = 'divorce';

		this.momAway = false;

		this.momCharacter.setX(this.momPosition);

		this.momCharacter.setScale(0.78);
		this.momCharacter.setY(340);

		this.momCharacter.play("momanger");

		this.time.delayedCall(334, () => {
			this.momAngry.play();
		});

		this.kid.play('hitthrice');

		const startX = this.momPosition;
		const endX = 595;
		const momSpeed = 0.37;

		const distance = Math.abs(endX - startX);
		const duration = distance / momSpeed;

		this.time.delayedCall(3066, () => {  
			if (!(this.momPosition >= 595)) {
				this.momAway = true;
				this.tweens.add({
					targets: this.momCharacter,
					x: endX,
					duration: duration,
					ease: 'Linear',
					onStart: () => {
						this.momCharacter.setScale(0.68);
						this.momCharacter.setY(360);
						this.momCharacter.play('angrywalkright');
						this.momFootsteps.play();
					},
					onComplete: () => {
						this.blackoverlay.setVisible(true);
						this.cameraClick.play();
						//this.momCharacter.play('momProtection');
						this.time.delayedCall(150, () => {
							this.blackoverlay.setVisible(false);
							this.tweens.add({
								targets: this.momCharacter,
								x: -130,
								duration: 2000,
								ease: 'Linear',
								onStart: () => {
									this.kid.setX(619);
									this.kid.setY(360);
									this.momCharacter.play('angrywalkleft');
									this.kid.play('boywalking');
									this.momFootsteps.stop();
									this.momAndSonFootsteps.play();
									this.tweens.add({
										targets: this.kid,
										x: -130,
										duration: 2100,
										onComplete: () => {
											this.momAndSonFootsteps.stop();
											this.time.delayedCall(500, () => {
												this.socket.off("phone_disconnected");

												this.scene.start('ResultsScene', { socket: this.socket, 
												roomCode: this.roomCode, 
												hitCount: this.hitCount, 
												maxCombo: this.maxCombo, 
												finalScore: this.finalScore,
												ending: this.ending });
											});
										}
									});
								}
							});
						});
					}
				});
			} else {
				this.blackoverlay.setVisible(true);
				this.cameraClick.play();
				//this.momCharacter.play('momProtection');
				this.time.delayedCall(150, () => {
					this.momCharacter.setScale(0.68);
					this.momCharacter.setY(360);
					this.blackoverlay.setVisible(false);
					this.tweens.add({
						targets: this.momCharacter,
						x: -130,
						duration: 2000,
						ease: 'Linear',
						onStart: () => {
							this.momCharacter.play('angrywalkleft');
							this.kid.play('boywalking');
							this.momAndSonFootsteps.play();
							this.tweens.add({
								targets: this.kid,
								x: -130,
								duration: 2300,
								onComplete: () => {
									this.time.delayedCall(500, () => {
										this.socket.off("phone_disconnected");
										this.momAndSonFootsteps.stop();

										this.scene.start('ResultsScene', { socket: this.socket, 
										roomCode: this.roomCode, 
										hitCount: this.hitCount, 
										maxCombo: this.maxCombo, 
										finalScore: this.finalScore,
										ending: this.ending });
									});
								}
							});
						}
					});
				});
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
