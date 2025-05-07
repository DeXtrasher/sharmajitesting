
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ResultsScene extends Phaser.Scene {

	constructor() {
		super("ResultsScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// newPaper
		const newPaper = this.add.image(640, 360, "newPaper");

		// violence
		const violence = this.add.text(158, 74, "", {});
		violence.text = "Acts of violence committed upon your child:";
		violence.setStyle({ "color": "#000000ff", "fontFamily": "Cera Pro Light", "fontSize": "30px" });

		// highestcombotext
		const highestcombotext = this.add.text(158, 141, "", {});
		highestcombotext.text = "Highest combo:";
		highestcombotext.setStyle({ "color": "#000000ff", "fontFamily": "Cera Pro Light", "fontSize": "30px" });

		// finalscoretext
		const finalscoretext = this.add.text(158, 212, "", {});
		finalscoretext.text = "Final score:";
		finalscoretext.setStyle({ "color": "#000000ff", "fontFamily": "Cera Pro Light", "fontSize": "30px" });

		// finalgradetext
		const finalgradetext = this.add.text(640, 332, "", {});
		finalgradetext.setOrigin(0.5, 0.5);
		finalgradetext.visible = false;
		finalgradetext.text = "Final outcome:";
		finalgradetext.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "36px", "resolution": 3 });

		// number1
		const number1 = this.add.text(783, 74, "", {});
		number1.visible = false;
		number1.text = "X";
		number1.setStyle({ "color": "#000000ff", "fontFamily": "Cera Pro Medium", "fontSize": "30px" });

		// number2
		const number2 = this.add.text(393, 141, "", {});
		number2.visible = false;
		number2.text = "X";
		number2.setStyle({ "color": "#000000ff", "fontFamily": "Cera Pro Medium", "fontSize": "30px" });

		// grade
		const grade = this.add.text(640, 429, "", {});
		grade.angle = -20;
		grade.setOrigin(0.5, 0.5);
		grade.visible = false;
		grade.text = "A+";
		grade.setStyle({ "color": "#da0000ff", "fontFamily": "Chunkfive", "fontSize": "108px" });

		// number3
		const number3 = this.add.text(330, 212, "", {});
		number3.visible = false;
		number3.text = "X";
		number3.setStyle({ "color": "#000000ff", "fontFamily": "Cera Pro Medium", "fontSize": "30px" });

		// comments
		const comments = this.add.text(640, 526, "", {});
		comments.setOrigin(0.5, 0);
		comments.visible = false;
		comments.text = "And she took custody of Beta. Have fun being alone for the rest of your life!";
		comments.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Cera Pro Light", "fontSize": "30px" });
		comments.setWordWrapWidth(763);

		// next
		const next = this.add.image(1122, 639, "bignext");
		next.scaleX = 0.18343603505718878;
		next.scaleY = 0.18343603505718878;
		next.visible = false;

		// playagain
		const playagain = this.add.image(1122, 638, "playagain_1");
		playagain.scaleX = 0.16808243029665854;
		playagain.scaleY = 0.16808243029665854;
		playagain.visible = false;

		this.newPaper = newPaper;
		this.violence = violence;
		this.highestcombotext = highestcombotext;
		this.finalscoretext = finalscoretext;
		this.finalgradetext = finalgradetext;
		this.number1 = number1;
		this.number2 = number2;
		this.grade = grade;
		this.number3 = number3;
		this.comments = comments;
		this.next = next;
		this.playagain = playagain;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	newPaper;
	/** @type {Phaser.GameObjects.Text} */
	violence;
	/** @type {Phaser.GameObjects.Text} */
	highestcombotext;
	/** @type {Phaser.GameObjects.Text} */
	finalscoretext;
	/** @type {Phaser.GameObjects.Text} */
	finalgradetext;
	/** @type {Phaser.GameObjects.Text} */
	number1;
	/** @type {Phaser.GameObjects.Text} */
	number2;
	/** @type {Phaser.GameObjects.Text} */
	grade;
	/** @type {Phaser.GameObjects.Text} */
	number3;
	/** @type {Phaser.GameObjects.Text} */
	comments;
	/** @type {Phaser.GameObjects.Image} */
	next;
	/** @type {Phaser.GameObjects.Image} */
	playagain;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; 
		this.roomCode = data.roomCode;
		this.hitCount = data.hitCount;
		this.maxCombo = data.maxCombo;
		this.finalScore = data.finalScore;
		this.ending = data.ending;

    }

	create() {

		this.editorCreate();

		const neutralchoices = ["Have you ever tried loving your child? I guess that would be a nice thing to do for once...",
		 "Damn, that's bad. I wonder if the catalyst for a bad grade was a failed relationship with your child?", 
		 "Dude. You do realize that physical abuse is not a solution, right?"];

		const divorcechoices = ["And she took custody of Beta. Have fun being alone for the rest of your life!", 
		"She's also filing for custody of Beta. Consider NOT marrying again, will you?", 
		"You lost the custody battle, too. It's your fault, really, for behaving like a heartless monster."];

		const suicidechoices = ["Dad of the year right here. Hope you don’t ever reproduce again, you piece of shit.", 
		"Congratulations! Your beloved Beta is dead! And YOU killed him!", 
		"I really hope this cruelty is not hereditary...welp, too late to worry about that now."];

		const happychoices = ["DAMN! You’re actually...a nice human being?", 
		"YAY! You know how to take care of your child! I love it!", 
		"HOORAY! All goes well when sense prevails!"];

		const ranawaychoices = ["Sit tight, the police will be with you shortly. ", 
		"You know what they do to child abusers in jail, right?", 
		"The men in khaki are arriving to capture the man of no moral conscience."];

		this.dhamDhamDham = this.sound.add('dhamDhamDham', { volume: 0.6 });
		this.drumrollFanfare = this.sound.add('drumrollFanfare', { volume: 0.7 });
		this.drumrollQuack = this.sound.add('drumrollQuack', { volume: 0.7 });
		this.buttonClick = this.sound.add('buttonClick', { volume: 0.6 });

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		this.number1.setText(`${this.hitCount}`);
		this.number2.setText(`${this.maxCombo}`);
		this.number3.setText(`${this.finalScore}`);

		console.log(this.ending);

		const index = Phaser.Math.Between(0, 2);

		if (this.ending == 'ranaway' || this.ending == 'divorce' || this.ending == 'suicide') {

			this.finalgradetext.setText("Final outcome:")

			//this.grade.setPosition(640, 429);
			this.grade.setAngle(-9);
			this.grade.setFontSize(64);

			if (this.ending == 'ranaway') {
				this.grade.setText("BETA RAN AWAY");
				this.selectedString = ranawaychoices[index];
			} else if (this.ending == 'divorce') {
				this.grade.setText("DIVORCE.");
				this.selectedString = divorcechoices[index];
			} else if (this.ending == 'suicide') {
				this.grade.setPosition(640, 421);
				this.grade.setAngle(-8);
				this.grade.setFontSize(55);
				this.grade.setText("BETA COMMITTED SUICIDE");
				this.selectedString = suicidechoices[index];
			}
		} else if (this.ending == 'happy') {
			this.finalgradetext.setText("Beta's final grade:");
			//this.grade.setPosition(640, 429);
			//this.grade.setAngle(-20);
			//this.grade.setFontSize(108);
			this.grade.setText("A+");
			this.selectedString = happychoices[index];
		} else if (this.ending == 'neutral') {
			this.finalgradetext.setText("Beta's final grade:");
			if (this.hitCount > 0 && this.hitCount < 5) {
				this.grade.setText('C');
			} else if (this.hitCount >= 5 && this.hitCount < 10) {
				this.grade.setText('C-');
			} else if (this.hitCount >= 10 && this.hitCount < 15) {
				this.grade.setText('D+');
			} else if (this.hitCount >= 15 && this.hitCount < 20) {
				this.grade.setText('D');
			} else if (this.hitCount >= 20 && this.hitCount < 25) {
				this.grade.setText('D-');
			} else if (this.hitCount >= 25) {
				this.grade.setText('F');
			}
			this.selectedString = neutralchoices[index];
		}

		this.comments.setText(this.selectedString);

		this.time.delayedCall(500, () => {
			this.dhamDhamDham.play();
		});

		this.time.delayedCall(900, () => {
			this.number1.setVisible(true);

			this.time.delayedCall(1450, () => {
				this.number2.setVisible(true);

				this.time.delayedCall(1500, () => {
					this.number3.setVisible(true);

					this.time.delayedCall(1500, () => {
						this.finalgradetext.setVisible(true);
						if (this.ending == 'happy') {
							this.drumrollFanfare.play();
						} else {
							this.drumrollQuack.play();
						}

						this.time.delayedCall(3350, () => {
							this.grade.setVisible(true);

							this.time.delayedCall(1000, () => {

								this.comments.setVisible(true);

								if (!this.registry.get('statsPlayed')) {

									this.next.setVisible(true);

									this.next.setInteractive();

									this.next.on('pointerover', () => {
										this.input.setDefaultCursor('pointer'); 
									});

									this.next.on('pointerout', () => {
										this.input.setDefaultCursor(''); 
									});

									this.next.on('pointerdown', () => {
										this.socket.off("phone_disconnected");
										this.sound.stopAll();
										this.buttonClick.play();
										this.scene.start('StatsScene', { socket: this.socket, roomCode: this.roomCode });
										this.registry.set('statsPlayed', true);
									});

								} else {

									this.playagain.setVisible(true);

									this.playagain.setInteractive();

									this.playagain.on('pointerover', () => {
										this.input.setDefaultCursor('pointer'); 
									});

									this.playagain.on('pointerout', () => {
										this.input.setDefaultCursor(''); 
									});

									this.playagain.on('pointerdown', () => {
										this.socket.off("phone_disconnected");
										this.sound.stopAll();
										this.buttonClick.play();
										this.scene.start('PreHit', { socket: this.socket, roomCode: this.roomCode });
									});

								}

							});
						});
					});
				});
			});
		});



	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
