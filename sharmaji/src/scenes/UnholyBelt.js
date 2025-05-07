
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UnholyBelt extends Phaser.Scene {

	constructor() {
		super("UnholyBelt");

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

		// newPaper
		const newPaper = this.add.image(640, 360, "newPaper");

		// text_1
		const text_1 = this.add.text(640, 149, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "You now possess the spirit of the unholy belt in your hand.";
		text_1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "48px" });
		text_1.setWordWrapWidth(937);

		// text
		const text = this.add.text(402, 299, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Test it out! Try to hit Beta with it!";
		text.setStyle({ "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "36px" });
		text.setWordWrapWidth(744);

		// text_2
		const text_2 = this.add.text(452, 405, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "On the next screen, swing your phone around to simulate a hit from the belt.";
		text_2.setStyle({ "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "36px" });
		text_2.setWordWrapWidth(725);

		// hand0
		const hand0 = this.physics.add.sprite(1040, 382, "Hand", 0);
		hand0.scaleX = 1.2;
		hand0.scaleY = 1.2;
		hand0.body.setSize(256, 256, false);
		hand0.play("Hand");

		// skip
		const skip = this.add.image(254, 644, "bigskip");
		skip.scaleX = 0.25;
		skip.scaleY = 0.25;

		// next
		const next = this.add.image(1102, 644, "bignext");
		next.scaleX = 0.25;
		next.scaleY = 0.25;

		this.background = background;
		this.newPaper = newPaper;
		this.text_1 = text_1;
		this.text = text;
		this.text_2 = text_2;
		this.hand0 = hand0;
		this.skip = skip;
		this.next = next;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	newPaper;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	hand0;
	/** @type {Phaser.GameObjects.Image} */
	skip;
	/** @type {Phaser.GameObjects.Image} */
	next;

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

		this.skip.setInteractive();
		this.next.setInteractive();

        // Change cursor to hand when hovering
        this.skip.on('pointerover', () => {
            this.input.setDefaultCursor('pointer'); // Change cursor to hand
        });
		this.next.on('pointerover', () => {
            this.input.setDefaultCursor('pointer'); // Change cursor to hand
        });

        // Change cursor back to default when not hovering
        this.skip.on('pointerout', () => {
            this.input.setDefaultCursor(''); // Reset cursor to default
        });
		this.next.on('pointerout', () => {
            this.input.setDefaultCursor(''); // Reset cursor to default
        });

        // Optional: Add a click event
        this.skip.on('pointerdown', () => {
			this.socket.off("phone_disconnected");
			this.buttonClick.play();
			this.sound.stopByKey('mainMenuTheme');
			this.scene.start('PreHit', { socket: this.socket, roomCode: this.roomCode });
        });
		this.next.on('pointerdown', () => {
			this.socket.off("phone_disconnected");
			this.buttonClick.play();
			this.scene.start('Ins1', { socket: this.socket, roomCode: this.roomCode });
        });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
