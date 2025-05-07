
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatsScene2 extends Phaser.Scene {

	constructor() {
		super("StatsScene2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// chalkboardg
		const chalkboardg = this.add.image(640, 360, "chalkboardg");

		// text_4
		const text_4 = this.add.text(61, 245, "", {});
		text_4.setOrigin(0, 0.5);
		text_4.alpha = 0;
		text_4.alphaTopLeft = 0;
		text_4.alphaTopRight = 0;
		text_4.alphaBottomLeft = 0;
		text_4.alphaBottomRight = 0;
		text_4.text = "Indian children are";
		text_4.setStyle({ "fontFamily": "Chunkfive", "fontSize": "60px" });

		// text_5
		const text_5 = this.add.text(653, 219, "", {});
		text_5.setOrigin(0, 0.5);
		text_5.alpha = 0;
		text_5.alphaTopLeft = 0;
		text_5.alphaTopRight = 0;
		text_5.alphaBottomLeft = 0;
		text_5.alphaBottomRight = 0;
		text_5.text = "4x";
		text_5.setStyle({ "fontFamily": "BrokenVessels", "fontSize": "120px" });

		// text_6
		const text_6 = this.add.text(829, 245, "", {});
		text_6.setOrigin(0, 0.5);
		text_6.alpha = 0;
		text_6.alphaTopLeft = 0;
		text_6.alphaTopRight = 0;
		text_6.alphaBottomLeft = 0;
		text_6.alphaBottomRight = 0;
		text_6.text = "more prone";
		text_6.setStyle({ "fontFamily": "Chunkfive", "fontSize": "60px" });

		// text_7
		const text_7 = this.add.text(61, 350, "", {});
		text_7.setOrigin(0, 0.5);
		text_7.alpha = 0;
		text_7.alphaTopLeft = 0;
		text_7.alphaTopRight = 0;
		text_7.alphaBottomLeft = 0;
		text_7.alphaBottomRight = 0;
		text_7.text = "to physical violence in privileged households.";
		text_7.setStyle({ "fontFamily": "Chunkfive", "fontSize": "60px" });
		text_7.setWordWrapWidth(1123);

		// text_8
		const text_8 = this.add.text(61, 532, "", {});
		text_8.setOrigin(0, 0.5);
		text_8.alpha = 0;
		text_8.alphaTopLeft = 0;
		text_8.alphaTopRight = 0;
		text_8.alphaBottomLeft = 0;
		text_8.alphaBottomRight = 0;
		text_8.text = "This is due to academic expectations.";
		text_8.setStyle({ "fontFamily": "Chunkfive", "fontSize": "60px" });
		text_8.setWordWrapWidth(1123);

		this.chalkboardg = chalkboardg;
		this.text_4 = text_4;
		this.text_5 = text_5;
		this.text_6 = text_6;
		this.text_7 = text_7;
		this.text_8 = text_8;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	chalkboardg;
	/** @type {Phaser.GameObjects.Text} */
	text_4;
	/** @type {Phaser.GameObjects.Text} */
	text_5;
	/** @type {Phaser.GameObjects.Text} */
	text_6;
	/** @type {Phaser.GameObjects.Text} */
	text_7;
	/** @type {Phaser.GameObjects.Text} */
	text_8;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.input.setDefaultCursor('');

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		// 5. 100 ms delay
		this.time.delayedCall(100, () => {


			// 6. Fade in text_4 to text_7
			this.tweens.add({
				targets: [this.text_4, this.text_5, this.text_6, this.text_7],
				alpha: 1,
				duration: 1500,
				onComplete: () => {


					// 7. 3000 ms delay
					this.time.delayedCall(3000, () => {


						// 8. Fade in text_8
						this.tweens.add({
							targets: this.text_8,
							alpha: 1,
							duration: 1500,
							onComplete: () => {


								// 9. 2000 ms delay
								this.time.delayedCall(2500, () => {


									// 10. Fade out text_4 to text_8
									this.tweens.add({
										targets: [this.text_4, this.text_5, this.text_6, this.text_7, this.text_8],
										alpha: 0,
										duration: 1500,
										onComplete: () => {
											this.scene.start('StatsScene3', { socket: this.socket, roomCode: this.roomCode });
										}
									});
								});
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
