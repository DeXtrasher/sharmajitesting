
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Ins9 extends Phaser.Scene {

	constructor() {
		super("Ins9");

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
		const tablept1 = this.add.image(636, 356, "tablept1");
		tablept1.scaleX = 0.67;
		tablept1.scaleY = 0.67;

		// kid
		const kid = this.physics.add.sprite(746, 377, "neutralstudy", 0);
		kid.scaleX = 0.68;
		kid.scaleY = 0.68;
		kid.body.setSize(800, 800, false);
		kid.play("hitonce");

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

		// scoreRect
		const scoreRect = this.add.image(144, 91, "scorerectangle");
		scoreRect.scaleX = 0.27;
		scoreRect.scaleY = 0.21560832801938257;

		// scoreText
		const scoreText = this.add.text(62, 77, "", {});
		scoreText.text = "Score: 0";
		scoreText.setStyle({ "color": "#000000ff", "fontFamily": "CeraProBold", "fontSize": "24px", "stroke": "#ffffffff" });

		// smallPaper
		const smallPaper = this.add.image(598, 342, "smallPaper");
		smallPaper.scaleX = 0.20019487082473372;
		smallPaper.scaleY = 0.20019487082473372;

		// text
		const text = this.add.text(600, 331, "", {});
		text.scaleX = 0.9140632170819268;
		text.scaleY = 0.9140632170819268;
		text.setOrigin(0.5, 0.5);
		text.text = "Finally, you’ll be given a time of two minutes to ‘discipline’ Beta.\n\nTurn him into the best Sharma Ji ka Beta you can!";
		text.setStyle({ "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "28px" });
		text.setWordWrapWidth(262);

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

		// ellipse_1
		const ellipse_1 = this.add.image(593, 109, "timercircle");
		ellipse_1.scaleX = 0.2066274786444659;
		ellipse_1.scaleY = 0.2066274786444659;

		// timerText
		const timerText = this.add.text(543, 89, "", {});
		timerText.text = "02:00";
		timerText.setStyle({ "color": "#000000ff", "fontFamily": "CeraProBold", "fontSize": "36px" });

		// gamebutton
		const gamebutton = this.add.image(640, 543, "startgame_1");
		gamebutton.scaleX = 0.17;
		gamebutton.scaleY = 0.17;

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
		this.scoreRect = scoreRect;
		this.scoreText = scoreText;
		this.smallPaper = smallPaper;
		this.text = text;
		this.shaktiContainer = shaktiContainer;
		this.shaktiBar = shaktiBar;
		this.energybar3 = energybar3;
		this.ellipse_1 = ellipse_1;
		this.timerText = timerText;
		this.gamebutton = gamebutton;

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
	scoreRect;
	/** @type {Phaser.GameObjects.Text} */
	scoreText;
	/** @type {Phaser.GameObjects.Image} */
	smallPaper;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Image} */
	shaktiContainer;
	/** @type {Phaser.GameObjects.Image} */
	shaktiBar;
	/** @type {Phaser.GameObjects.Image} */
	energybar3;
	/** @type {Phaser.GameObjects.Image} */
	ellipse_1;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.GameObjects.Image} */
	gamebutton;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.input.setDefaultCursor('');

		this.buttonClick = this.sound.add('buttonClick', { volume: 0.6 });

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		this.gamebutton.setInteractive();

		// Change cursor to hand when hovering
		this.gamebutton.on('pointerover', () => {
			this.input.setDefaultCursor('pointer'); // Change cursor to hand
		});

		// Change cursor back to default when not hovering
		this.gamebutton.on('pointerout', () => {
			this.input.setDefaultCursor(''); // Reset cursor to default
		});

		// Optional: Add a click event
		this.gamebutton.on('pointerdown', () => {
			this.socket.off("phone_disconnected");
			this.buttonClick.play();
			this.sound.stopByKey('mainMenuTheme');
			this.scene.start('PreHit', { socket: this.socket, roomCode: this.roomCode });
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
