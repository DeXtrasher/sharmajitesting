
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PreHit extends Phaser.Scene {

	constructor() {
		super("PreHit");

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

		// energycontainer
		const energycontainer = this.add.image(1085, 93, "healthbar2");
		energycontainer.scaleX = 0.77;
		energycontainer.scaleY = 0.77;

		// energybar
		const energybar = this.add.image(1083, 92, "healthbar1");
		energybar.scaleX = 0.77;
		energybar.scaleY = 0.77;

		// healthbar3
		const healthbar3 = this.add.image(901, 93, "healthbar3");

		// ellipse_1
		const ellipse_1 = this.add.image(593, 109, "timercircle");
		ellipse_1.scaleX = 0.2066274786444659;
		ellipse_1.scaleY = 0.2066274786444659;

		// timerText
		const timerText = this.add.text(543, 89, "", {});
		timerText.text = "02:00";
		timerText.setStyle({ "color": "#000000ff", "fontFamily": "CeraProBold", "fontSize": "36px" });

		// scoreRect
		const scoreRect = this.add.image(144, 91, "scorerectangle");
		scoreRect.scaleX = 0.27;
		scoreRect.scaleY = 0.21560832801938257;

		// scoreText
		const scoreText = this.add.text(62, 77, "", {});
		scoreText.text = "Score: 0";
		scoreText.setStyle({ "color": "#000000ff", "fontFamily": "CeraProBold", "fontSize": "24px", "stroke": "#ffffffff" });

		// shaktiContainer
		const shaktiContainer = this.add.image(256, 657, "healthbar2");
		shaktiContainer.scaleX = 0.77;
		shaktiContainer.scaleY = 0.77;

		// shaktiBar
		const shaktiBar = this.add.image(254, 656, "energybarorange");
		shaktiBar.scaleX = 0.77;
		shaktiBar.scaleY = 0.77;

		// energybar3
		const energybar3 = this.add.image(72, 657, "energybar3");

		// three
		const three = this.add.image(640, 360, "THREE");
		three.scaleX = 0.4;
		three.scaleY = 0.4;

		// two
		const two = this.add.image(640, 360, "TWO");
		two.scaleX = 0.4;
		two.scaleY = 0.4;

		// one
		const one = this.add.image(640, 360, "ONE");
		one.scaleX = 0.4;
		one.scaleY = 0.4;

		// go
		const go = this.add.image(640, 360, "GO");
		go.scaleX = 0.4;
		go.scaleY = 0.4;

		this.background = background;
		this.shadows = shadows;
		this.almirahs = almirahs;
		this.shelf = shelf;
		this.chair = chair;
		this.tablept1 = tablept1;
		this.kid = kid;
		this.tablept2 = tablept2;
		this.energycontainer = energycontainer;
		this.energybar = energybar;
		this.healthbar3 = healthbar3;
		this.ellipse_1 = ellipse_1;
		this.timerText = timerText;
		this.scoreRect = scoreRect;
		this.scoreText = scoreText;
		this.shaktiContainer = shaktiContainer;
		this.shaktiBar = shaktiBar;
		this.energybar3 = energybar3;
		this.three = three;
		this.two = two;
		this.one = one;
		this.go = go;

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
	/** @type {Phaser.GameObjects.Image} */
	energycontainer;
	/** @type {Phaser.GameObjects.Image} */
	energybar;
	/** @type {Phaser.GameObjects.Image} */
	healthbar3;
	/** @type {Phaser.GameObjects.Image} */
	ellipse_1;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.GameObjects.Image} */
	scoreRect;
	/** @type {Phaser.GameObjects.Text} */
	scoreText;
	/** @type {Phaser.GameObjects.Image} */
	shaktiContainer;
	/** @type {Phaser.GameObjects.Image} */
	shaktiBar;
	/** @type {Phaser.GameObjects.Image} */
	energybar3;
	/** @type {Phaser.GameObjects.Image} */
	three;
	/** @type {Phaser.GameObjects.Image} */
	two;
	/** @type {Phaser.GameObjects.Image} */
	one;
	/** @type {Phaser.GameObjects.Image} */
	go;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket
		this.roomCode = data.roomCode;
    }

	create() {

		this.editorCreate();

		this.input.setDefaultCursor('');

		this.ttogo = this.sound.add('321go', { volume: 0.4 });

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		this.graphics = this.add.graphics();

        this.graphics.lineStyle(6, 0xffbd55, 1);

        //  Without this the arc will appear closed when stroked
        this.graphics.beginPath();

        // arc (x, y, radius, startAngle, endAngle, anticlockwise)
        this.graphics.arc(593, 109, 80, Phaser.Math.DegToRad(-90), Phaser.Math.DegToRad(-89.9999), true);

        this.graphics.strokePath();

		const countdownTexts = [this.three, this.two, this.one, this.go];
		countdownTexts.forEach(text => text.setScale(0.001));

		this.time.delayedCall(1000, () => {

			this.ttogo.play();
			countdownTexts.forEach((text, i) => {
				this.time.delayedCall(i * 1000, () => {
					this.tweens.add({
						targets: text,
						scale: 0.5,
						ease: 'Bounce.Out',
						duration: 600,
						onComplete: () => {
							this.tweens.add({
								targets: text,
								scale: 0.001,
								ease: 'Quad.In',
								delay: 400, // small delay before disappearing
								duration: 400,
								onComplete: () => {
									if (i == countdownTexts.length - 1) {
										this.scene.start("HitScene", { socket: this.socket, roomCode: this.roomCode });
									}
								}
							});
						}
					});
				});
			});
		})





	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
