
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Ins5 extends Phaser.Scene {

	constructor() {
		super("Ins5");

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
		const smallPaper = this.add.image(211, 362, "smallPaper");
		smallPaper.scaleX = 0.25;
		smallPaper.scaleY = 0.22;

		// text
		const text = this.add.text(206, 357, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "With each hit, your energy depletes, but replenishes quickly. If your energy is completely depleted, you faint.\n\nWhat happens after that? Who knows!\n";
		text.setStyle({ "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "28px" });
		text.setWordWrapWidth(351);

		// next2
		const next2 = this.add.image(339, 568, "smallnext");
		next2.scaleX = 0.18;
		next2.scaleY = 0.18;

		// skip2
		const skip2 = this.add.image(201, 564, "smallskip");
		skip2.scaleX = 0.18;
		skip2.scaleY = 0.18;

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
		this.next2 = next2;
		this.skip2 = skip2;
		this.shaktiContainer = shaktiContainer;
		this.shaktiBar = shaktiBar;
		this.energybar3 = energybar3;

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
	next2;
	/** @type {Phaser.GameObjects.Image} */
	skip2;
	/** @type {Phaser.GameObjects.Image} */
	shaktiContainer;
	/** @type {Phaser.GameObjects.Image} */
	shaktiBar;
	/** @type {Phaser.GameObjects.Image} */
	energybar3;

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

		this.skip2.setInteractive();
		this.next2.setInteractive();

		// Change cursor to hand when hovering
		this.skip2.on('pointerover', () => {
			this.input.setDefaultCursor('pointer'); // Change cursor to hand
		});
		this.next2.on('pointerover', () => {
			this.input.setDefaultCursor('pointer'); // Change cursor to hand
		});

		// Change cursor back to default when not hovering
		this.skip2.on('pointerout', () => {
			this.input.setDefaultCursor(''); // Reset cursor to default
		});
		this.next2.on('pointerout', () => {
			this.input.setDefaultCursor(''); // Reset cursor to default
		});

		// Optional: Add a click event
		this.skip2.on('pointerdown', () => {
			this.socket.off("phone_disconnected");
			this.buttonClick.play();
			this.sound.stopByKey('mainMenuTheme');
			this.scene.start('PreHit', { socket: this.socket, roomCode: this.roomCode });
		});
		this.next2.on('pointerdown', () => {
			this.socket.off("phone_disconnected");
			this.buttonClick.play();
			this.scene.start('Ins66', { socket: this.socket, roomCode: this.roomCode });
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
