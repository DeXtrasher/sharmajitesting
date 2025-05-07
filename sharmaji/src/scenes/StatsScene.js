
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatsScene extends Phaser.Scene {

	constructor() {
		super("StatsScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// chalkboardg
		const chalkboardg = this.add.image(640, 360, "chalkboardg");

		// text_1
		const text_1 = this.add.text(245, 294, "", {});
		text_1.setOrigin(0, 0.5);
		text_1.alpha = 0;
		text_1.alphaTopLeft = 0;
		text_1.alphaTopRight = 0;
		text_1.alphaBottomLeft = 0;
		text_1.alphaBottomRight = 0;
		text_1.text = "74%";
		text_1.setStyle({ "fontFamily": "BrokenVessels", "fontSize": "154px" });

		// text
		const text = this.add.text(39, 328, "", {});
		text.setOrigin(0, 0.5);
		text.alpha = 0;
		text.alphaTopLeft = 0;
		text.alphaTopRight = 0;
		text.alphaBottomLeft = 0;
		text.alphaBottomRight = 0;
		text.text = "Upto";
		text.setStyle({ "fontFamily": "Chunkfive", "fontSize": "80px" });

		// text_2
		const text_2 = this.add.text(542, 328, "", {});
		text_2.setOrigin(0, 0.5);
		text_2.alpha = 0;
		text_2.alphaTopLeft = 0;
		text_2.alphaTopRight = 0;
		text_2.alphaBottomLeft = 0;
		text_2.alphaBottomRight = 0;
		text_2.text = "of Indian children";
		text_2.setStyle({ "fontFamily": "Chunkfive", "fontSize": "80px" });

		// text_3
		const text_3 = this.add.text(46, 442, "", {});
		text_3.setOrigin(0, 0.5);
		text_3.alpha = 0;
		text_3.alphaTopLeft = 0;
		text_3.alphaTopRight = 0;
		text_3.alphaBottomLeft = 0;
		text_3.alphaBottomRight = 0;
		text_3.text = "report physical abuse.";
		text_3.setStyle({ "fontFamily": "Chunkfive", "fontSize": "80px" });

		this.chalkboardg = chalkboardg;
		this.text_1 = text_1;
		this.text = text;
		this.text_2 = text_2;
		this.text_3 = text_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	chalkboardg;
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

	init(data) {

        this.socket = data.socket; // Get the socket
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.outro = this.sound.add('outro', { volume: 0.5 });
		this.outro.play();

		this.input.setDefaultCursor('');

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		// 1. Initial delay
		this.time.delayedCall(300, () => {

			// 2. Fade in text_0 to text_3
			this.tweens.add({
				targets: [this.text, this.text_1, this.text_2, this.text_3],
				alpha: 1,
				duration: 1500,
				onComplete: () => {

					// 3. Wait 3500 ms
					this.time.delayedCall(3500, () => {

						// 4. Fade out text_0 to text_3
						this.tweens.add({
							targets: [this.text, this.text_1, this.text_2, this.text_3],
							alpha: 0,
							duration: 1500,
							onComplete: () => {
								this.scene.start('StatsScene2', { socket: this.socket, roomCode: this.roomCode });
							}
						});
					});
				}
			});

		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
