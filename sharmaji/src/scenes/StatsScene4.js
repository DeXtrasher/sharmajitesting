
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatsScene4 extends Phaser.Scene {

	constructor() {
		super("StatsScene4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// chalkboardg
		const chalkboardg = this.add.image(640, 360, "chalkboardg");

		// text_11
		const text_11 = this.add.text(60, 168, "", {});
		text_11.setOrigin(0, 0.5);
		text_11.alpha = 0;
		text_11.alphaTopLeft = 0;
		text_11.alphaTopRight = 0;
		text_11.alphaBottomLeft = 0;
		text_11.alphaBottomRight = 0;
		text_11.text = "Whom do we even blame?";
		text_11.setStyle({ "fontFamily": "Chunkfive", "fontSize": "80px" });
		text_11.setWordWrapWidth(1339);

		// text_12
		const text_12 = this.add.text(60, 280, "", {});
		text_12.setOrigin(0, 0.5);
		text_12.alpha = 0;
		text_12.alphaTopLeft = 0;
		text_12.alphaTopRight = 0;
		text_12.alphaBottomLeft = 0;
		text_12.alphaBottomRight = 0;
		text_12.text = "The mentality?";
		text_12.setStyle({ "fontFamily": "Chunkfive", "fontSize": "70px" });
		text_12.setWordWrapWidth(1339);

		// text_13
		const text_13 = this.add.text(603, 280, "", {});
		text_13.setOrigin(0, 0.5);
		text_13.alpha = 0;
		text_13.alphaTopLeft = 0;
		text_13.alphaTopRight = 0;
		text_13.alphaBottomLeft = 0;
		text_13.alphaBottomRight = 0;
		text_13.text = "The law?";
		text_13.setStyle({ "fontFamily": "Chunkfive", "fontSize": "70px" });
		text_13.setWordWrapWidth(1339);

		// text_14
		const text_14 = this.add.text(60, 496, "", {});
		text_14.setOrigin(0, 0.5);
		text_14.alpha = 0;
		text_14.alphaTopLeft = 0;
		text_14.alphaTopRight = 0;
		text_14.alphaBottomLeft = 0;
		text_14.alphaBottomRight = 0;
		text_14.text = "Children suffer in silence, regardless.";
		text_14.setStyle({ "fontFamily": "Chunkfive", "fontSize": "80px" });
		text_14.setWordWrapWidth(1339);

		// playagain
		const playagain = this.add.image(1114, 623, "playagain_1");
		playagain.scaleX = 0.21549797295429415;
		playagain.scaleY = 0.21549797295429415;
		playagain.alpha = 0;
		playagain.alphaTopLeft = 0;
		playagain.alphaTopRight = 0;
		playagain.alphaBottomLeft = 0;
		playagain.alphaBottomRight = 0;

		this.chalkboardg = chalkboardg;
		this.text_11 = text_11;
		this.text_12 = text_12;
		this.text_13 = text_13;
		this.text_14 = text_14;
		this.playagain = playagain;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	chalkboardg;
	/** @type {Phaser.GameObjects.Text} */
	text_11;
	/** @type {Phaser.GameObjects.Text} */
	text_12;
	/** @type {Phaser.GameObjects.Text} */
	text_13;
	/** @type {Phaser.GameObjects.Text} */
	text_14;
	/** @type {Phaser.GameObjects.Image} */
	playagain;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.buttonClick = this.sound.add('buttonClick', { volume: 0.6 });

		this.input.setDefaultCursor('');

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		// 16. Fade in text_11
		this.tweens.add({

			targets: this.text_11,
			alpha: 1,
			duration: 1500,
			onComplete: () => {


				// 17. 1500 ms delay
				this.time.delayedCall(1500, () => {


					// 18. Fade in text_12
					this.tweens.add({
						targets: this.text_12,
						alpha: 1,
						duration: 1500,
						onComplete: () => {


							// 19. 1000 ms delay
							this.time.delayedCall(1000, () => {


								// 20. Fade in text_13
								this.tweens.add({
									targets: this.text_13,
									alpha: 1,
									duration: 1500,
									onComplete: () => {


										// 21. 1500 ms delay
										this.time.delayedCall(1500, () => {


											// 22. Fade in text_14
											this.tweens.add({
												targets: this.text_14,
												alpha: 1,
												duration: 1500,
												onComplete: () => {


													// 23. 2000 ms delay
													this.time.delayedCall(2000, () => {


														// 24. Fade in playagain
														this.tweens.add({
															targets: this.playagain,
															alpha: 1,
															duration: 1000,
															onStart: () => {


																this.playagain.setInteractive();


																// Change cursor to hand when hovering
																this.playagain.on('pointerover', () => {
																	this.input.setDefaultCursor('pointer'); // Change cursor to hand
																});


																// Change cursor back to default when not hovering
																this.playagain.on('pointerout', () => {
																	this.input.setDefaultCursor(''); // Reset cursor to default
																});


																// Optional: Add a click event
																this.playagain.on('pointerdown', () => {
																	this.socket.off("phone_disconnected");
																	this.sound.stopAll();
																	this.buttonClick.play();
																	this.scene.start('PreHit', { socket: this.socket, roomCode: this.roomCode } );
																});
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
					});
				});
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
