
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatsScene3 extends Phaser.Scene {

	constructor() {
		super("StatsScene3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// chalkboardg
		const chalkboardg = this.add.image(640, 360, "chalkboardg");

		// text_9
		const text_9 = this.add.text(38, 266, "", {});
		text_9.setOrigin(0, 0.5);
		text_9.alpha = 0;
		text_9.alphaTopLeft = 0;
		text_9.alphaTopRight = 0;
		text_9.alphaBottomLeft = 0;
		text_9.alphaBottomRight = 0;
		text_9.text = "Indian law only protects children from sexual abuse.";
		text_9.setStyle({ "fontFamily": "Chunkfive", "fontSize": "60px" });
		text_9.setWordWrapWidth(1141);

		// text_10
		const text_10 = this.add.text(38, 485, "", {});
		text_10.setOrigin(0, 0.5);
		text_10.alpha = 0;
		text_10.alphaTopLeft = 0;
		text_10.alphaTopRight = 0;
		text_10.alphaBottomLeft = 0;
		text_10.alphaBottomRight = 0;
		text_10.text = "Corporal punishment still runs rampant, despite being banned since 2009.";
		text_10.setStyle({ "fontFamily": "Chunkfive", "fontSize": "60px" });
		text_10.setWordWrapWidth(1225);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(36, 333, 128, 128);
		rectangle_1.scaleX = 1.6;
		rectangle_1.scaleY = 0.03;
		rectangle_1.setOrigin(0, 0.5);
		rectangle_1.alpha = 0;
		rectangle_1.isFilled = true;

		this.chalkboardg = chalkboardg;
		this.text_9 = text_9;
		this.text_10 = text_10;
		this.rectangle_1 = rectangle_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	chalkboardg;
	/** @type {Phaser.GameObjects.Text} */
	text_9;
	/** @type {Phaser.GameObjects.Text} */
	text_10;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;

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

		// 11. Fade in text_9
		this.tweens.add({
			targets: [this.text_9, this.rectangle_1],
			alpha: 1,
			duration: 1500,
			onComplete: () => {


				// 12. 2500 ms delay
				this.time.delayedCall(3500, () => {


					// 13. Fade in text_10
					this.tweens.add({
						targets: this.text_10,
						alpha: 1,
						duration: 1500,
						onComplete: () => {


							// 14. 3000 ms delay
							this.time.delayedCall(4500, () => {


								// 15. Fade out text_9 and text_10
								this.tweens.add({
									targets: [this.text_9, this.text_10, this.rectangle_1],
									alpha: 0,
									duration: 1500,
									onComplete: () => {
										this.scene.start('StatsScene4', { socket: this.socket, roomCode: this.roomCode });
									}
								});
							});
						}
					});
				});
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
