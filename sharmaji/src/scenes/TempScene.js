
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TempScene extends Phaser.Scene {

	constructor() {
		super("TempScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// newPaper
		const newPaper = this.add.image(640, 360, "newPaper");

		// text_1
		const text_1 = this.add.text(640, 568, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "XXXX";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "120px" });

		// text
		const text = this.add.text(640, 173, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "You lost your connection!";
		text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "64px" });

		// text_2
		const text_2 = this.add.text(640, 316, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Use your phone to rejoin the same room and continue\nthis game! (If you call domestic violence a game, that is.)";
		text_2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "36px" });

		// text_3
		const text_3 = this.add.text(640, 464, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "Your room number is:";
		text_3.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "36px" });

		this.newPaper = newPaper;
		this.text_1 = text_1;
		this.text = text;
		this.text_2 = text_2;
		this.text_3 = text_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	newPaper;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.GameObjects.Text} */
	text_3;

	/* START-USER-CODE */

	// Write your code here

	create(data) {

		this.editorCreate();

		this.roomLeave = this.sound.add('roomLeave', { volume: 0.4 });
		this.roomJoin = this.sound.add('roomJoin', { volume: 0.4 });

		this.sound.pauseAll();

		this.roomLeave.play();

		this.socket = data.socket;
		this.roomCode = data.roomCode;
		this.pausedScene = data.pausedScene;

		this.text_1.setText(`${this.roomCode}`);

		console.log("TempScene is active!");
		//this.add.text(400, 300, "TEMP SCENE", { fontSize: '48px', color: '#ff0000' }).setOrigin(0.5);
		//this.cameras.main.setAlpha(1);
		this.scene.bringToTop();

		if (!this.socket) {
            console.error("Socket not found in TempScene!");
            return;
        } else {
			console.log(this.socket);
		}

		this.socket.off("room_joined");

		console.log("Game paused now!");

		this.socket.on("room_joined", () => {
            console.log("📱 Phone reconnected! Closing TemporaryScene...");
            this.scene.stop("TempScene"); // Stop this scene
            this.scene.resume(this.pausedScene); // Resume last scene
			this.sound.resumeAll();
			this.roomJoin.play();
        });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
