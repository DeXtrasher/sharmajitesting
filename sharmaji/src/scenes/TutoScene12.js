
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TutoScene12 extends Phaser.Scene {

	constructor() {
		super("TutoScene12");

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

		// text_2
		const text_2 = this.add.text(152, 205, "", {});
		text_2.text = "Your weapon? The unholy belt. \n\nUse it on Beta to make him study, and get good grades, and honour the family name, and blah blah blah.\n\nYou’ll be using your phone to connect to this desktop, and swing it around like a belt to beat up an innocent child.";
		text_2.setStyle({ "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "30px" });
		text_2.setWordWrapWidth(442);

		// text_1
		const text_1 = this.add.text(142, 88, "", {});
		text_1.text = "Belt-e-khauf";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "60px" });

		// next
		const next = this.add.image(1102, 644, "bignext");
		next.scaleX = 0.25;
		next.scaleY = 0.25;

		// handwithbelt
		const handwithbelt = this.add.image(893, 360, "handwithbelt");
		handwithbelt.scaleX = 0.4387776819415197;
		handwithbelt.scaleY = 0.4387776819415197;

		this.background = background;
		this.newPaper = newPaper;
		this.text_2 = text_2;
		this.text_1 = text_1;
		this.next = next;
		this.handwithbelt = handwithbelt;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	newPaper;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Image} */
	next;
	/** @type {Phaser.GameObjects.Image} */
	handwithbelt;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket from Play
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.buttonClick = this.sound.add('buttonClick', { volume: 0.6 });
		this.belt1 = this.sound.add('belt1', { volume: 0.4 });

		this.input.setDefaultCursor('');

		this.next.setInteractive();


		this.belt1.play();

        // Change cursor to hand when hovering
		this.next.on('pointerover', () => {
            this.input.setDefaultCursor('pointer'); // Change cursor to hand
        });

        // Change cursor back to default when not hovering
		this.next.on('pointerout', () => {
            this.input.setDefaultCursor(''); // Reset cursor to default
        });

        // Optional: Add a click event
		this.next.on('pointerdown', () => {
			this.buttonClick.play();
			this.scene.start('PCScene', { socket: this.socket, roomCode: this.roomCode });
        });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
