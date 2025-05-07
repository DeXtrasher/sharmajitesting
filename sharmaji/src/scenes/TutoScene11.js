
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TutoScene11 extends Phaser.Scene {

	constructor() {
		super("TutoScene11");

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
		const text_1 = this.add.text(142, 82, "", {});
		text_1.text = "You are Sharma Ji.";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "60px" });

		// text_2
		const text_2 = this.add.text(152, 200, "", {});
		text_2.text = "A typical Indian dad ‘concerned’ for his Beta’s future, who takes to anger like a duck to water.\n\nLately, Beta has been getting mediocre grades in school. \n\nThe solution? BASH HIM UP! Beat him till his grades improve! ";
		text_2.setStyle({ "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "30px" });
		text_2.setWordWrapWidth(442);

		// skip
		const skip = this.add.image(254, 644, "bigskip");
		skip.scaleX = 0.25;
		skip.scaleY = 0.25;

		// next
		const next = this.add.image(1102, 644, "bignext");
		next.scaleX = 0.25;
		next.scaleY = 0.25;

		// badsharma
		const badsharma = this.add.image(928, 359, "badsharma");
		badsharma.scaleX = 0.2877905718524332;
		badsharma.scaleY = 0.2877905718524332;

		this.background = background;
		this.newPaper = newPaper;
		this.text_1 = text_1;
		this.text_2 = text_2;
		this.skip = skip;
		this.next = next;
		this.badsharma = badsharma;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	newPaper;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.GameObjects.Image} */
	skip;
	/** @type {Phaser.GameObjects.Image} */
	next;
	/** @type {Phaser.GameObjects.Image} */
	badsharma;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket from Play
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.buttonClick = this.sound.add('buttonClick', { volume: 0.6 });
		this.grunt3 = this.sound.add('grunt3', { volume: 1 });

		this.input.setDefaultCursor('');

		this.skip.setInteractive();
		this.next.setInteractive();

		this.time.delayedCall(500, () => {
			this.grunt3.play();
		});

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
			this.buttonClick.play();
			this.scene.start('PCScene', { socket: this.socket, roomCode: this.roomCode });
        });
		this.next.on('pointerdown', () => {
			this.buttonClick.play();
			this.scene.start('TutoScene12', { socket: this.socket, roomCode: this.roomCode });
        });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
