// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PCScene extends Phaser.Scene {

	constructor() {
		super("PCScene");

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

		// roomCodeText
		const roomCodeText = this.add.text(493, 272, "", {});
		roomCodeText.text = "XXXX";
		roomCodeText.setStyle({ "color": "#000000ff", "fontFamily": "CeraProBold", "fontSize": "120px" });

		// text_1
		const text_1 = this.add.text(494.5, 129, "", {});
		text_1.text = "Room code:";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "52px" });

		// text
		const text = this.add.text(640, 544, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Visit <URL> on your phone and enter this room code to connect.";
		text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "40px" });
		text.setWordWrapWidth(744);

		this.background = background;
		this.newPaper = newPaper;
		this.roomCodeText = roomCodeText;
		this.text_1 = text_1;
		this.text = text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	newPaper;
	/** @type {Phaser.GameObjects.Text} */
	roomCodeText;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket
		this.roomCode = data.roomCode;

    }

	create() {

		if (!this.socket) {
            console.error("Socket not found in PCScene!");
			this.scene.stop();
            return;
        } else {
			console.log(this.socket);
		}

		this.editorCreate();

		this.roomJoin = this.sound.add('roomJoin', { volume: 0.4 });

		this.input.setDefaultCursor('');

		this.roomCodeText.setText(`${this.roomCode}`);

		this.socket.on("room_joined", () => {

			this.roomJoin.play();
			this.scene.start("UnholyBelt", { socket: this.socket, roomCode: this.roomCode }); 

		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
