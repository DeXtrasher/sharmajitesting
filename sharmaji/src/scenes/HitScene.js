
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HitScene extends Phaser.Scene {

	constructor() {
		super("HitScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(640, 360, "bgplain");
		background.scaleX = 0.67;
		background.scaleY = 0.67;

		// shadows
		const shadows = this.add.image(640, 360, "shadows");
		shadows.scaleX = 0.67;
		shadows.scaleY = 0.67;

		// almirahs
		const almirahs = this.add.image(640, 360, "almirahs");
		almirahs.scaleX = 0.67;
		almirahs.scaleY = 0.67;

		// shelf
		const shelf = this.add.image(640, 360, "shelf");
		shelf.scaleX = 0.67;
		shelf.scaleY = 0.67;

		// chair
		const chair = this.add.image(640, 360, "chair");
		chair.scaleX = 0.67;
		chair.scaleY = 0.67;

		// tablept1
		const tablept1 = this.add.image(640, 360, "tablept1");
		tablept1.scaleX = 0.67;
		tablept1.scaleY = 0.67;

		// kid
		const kid = this.physics.add.sprite(746, 377, "neutralstudy", 0);
		kid.scaleX = 0.68;
		kid.scaleY = 0.68;
		kid.body.setSize(800, 800, false);
		kid.play("neutralstudy");

		// tablept2
		const tablept2 = this.add.image(636, 356, "tablept2");
		tablept2.scaleX = 0.67;
		tablept2.scaleY = 0.67;

		// energycontainer
		const energycontainer = this.add.image(1085, 93, "healthbar2");
		energycontainer.scaleX = 0.77;
		energycontainer.scaleY = 0.77;

		// energybar
		const energybar = this.add.image(1083, 92, "healthbar1");
		energybar.scaleX = 0.77;
		energybar.scaleY = 0.77;

		// energyMask
		const energyMask = this.add.image(1083, 92, "healthbar1");
		energyMask.scaleX = 0.77;
		energyMask.scaleY = 0.77;
		energyMask.visible = false;

		// healthbar3
		const healthbar3 = this.add.image(901, 93, "healthbar3");

		// ellipse_1
		const ellipse_1 = this.add.image(593, 109, "timercircle");
		ellipse_1.scaleX = 0.2066274786444659;
		ellipse_1.scaleY = 0.2066274786444659;

		// timerText
		const timerText = this.add.text(543, 89, "", {});
		timerText.text = "02:00";
		timerText.setStyle({ "color": "#000000ff", "fontFamily": "CeraProBold", "fontSize": "36px" });

		// momCharacter
		const momCharacter = this.physics.add.sprite(-130, 338, "momwalksleft", 0);
		momCharacter.scaleX = 0.68;
		momCharacter.scaleY = 0.68;
		momCharacter.body.setSize(800, 800, false);
		momCharacter.play("momwalksleft");

		// hitBar
		const hitBar = this.add.image(640, 580, "swingtohitbar");
		hitBar.scaleX = 0.53;
		hitBar.scaleY = 0.25;
		hitBar.visible = false;

		// hitBarMask
		const hitBarMask = this.add.image(640, 580, "swingtohitbar");
		hitBarMask.scaleX = 0.53;
		hitBarMask.scaleY = 0.25;
		hitBarMask.visible = false;

		// tth
		const tth = this.add.image(640, 492, "swingandhit");
		tth.scaleX = 0.2;
		tth.scaleY = 0.2;
		tth.visible = false;

		// comboRect
		const comboRect = this.add.image(132, 160, "comborectangle");
		comboRect.scaleX = 0.23;
		comboRect.scaleY = 0.2;
		comboRect.angle = 7;
		comboRect.visible = false;

		// comboText
		const comboText = this.add.text(128, 160, "", {});
		comboText.angle = 7;
		comboText.setOrigin(0.5, 0.5);
		comboText.visible = false;
		comboText.text = "COMBO XX";
		comboText.setStyle({ "color": "#000000ff", "fontFamily": "Chunkfive", "fontSize": "24px" });

		// scoreRect
		const scoreRect = this.add.image(144, 91, "scorerectangle");
		scoreRect.scaleX = 0.27;
		scoreRect.scaleY = 0.21560832801938257;

		// scoreText
		const scoreText = this.add.text(62, 77, "", {});
		scoreText.text = "Score: 0";
		scoreText.setStyle({ "color": "#000000ff", "fontFamily": "CeraProBold", "fontSize": "24px", "stroke": "#ffffffff" });

		// mom
		const mom = this.add.image(1142, 602, "momicon");
		mom.scaleX = 0.1939355320718887;
		mom.scaleY = 0.1939355320718887;
		mom.alpha = 0;
		mom.alphaTopLeft = 0;
		mom.alphaTopRight = 0;
		mom.alphaBottomLeft = 0;
		mom.alphaBottomRight = 0;

		// blackOverlay
		const blackOverlay = this.add.rectangle(639, 359, 128, 128);
		blackOverlay.scaleX = 10.15;
		blackOverlay.scaleY = 5.8;
		blackOverlay.visible = false;
		blackOverlay.isFilled = true;
		blackOverlay.fillColor = 0;

		// shaktiContainer
		const shaktiContainer = this.add.image(256, 657, "healthbar2");
		shaktiContainer.scaleX = 0.77;
		shaktiContainer.scaleY = 0.77;

		// shaktiBar
		const shaktiBar = this.add.image(254, 656, "energybarorange");
		shaktiBar.scaleX = 0.77;
		shaktiBar.scaleY = 0.77;

		// shaktiMask
		const shaktiMask = this.add.image(254, 656, "energybarorange");
		shaktiMask.scaleX = 0.77;
		shaktiMask.scaleY = 0.77;
		shaktiMask.visible = false;

		// energybar3
		const energybar3 = this.add.image(72, 657, "energybar3");

		// impact
		const impact = this.physics.add.sprite(640, 360, "impactanim", 0);
		impact.body.setSize(1280, 720, false);
		impact.play("");

		this.background = background;
		this.shadows = shadows;
		this.almirahs = almirahs;
		this.shelf = shelf;
		this.chair = chair;
		this.tablept1 = tablept1;
		this.kid = kid;
		this.tablept2 = tablept2;
		this.energycontainer = energycontainer;
		this.energybar = energybar;
		this.energyMask = energyMask;
		this.healthbar3 = healthbar3;
		this.ellipse_1 = ellipse_1;
		this.timerText = timerText;
		this.momCharacter = momCharacter;
		this.hitBar = hitBar;
		this.hitBarMask = hitBarMask;
		this.tth = tth;
		this.comboRect = comboRect;
		this.comboText = comboText;
		this.scoreRect = scoreRect;
		this.scoreText = scoreText;
		this.mom = mom;
		this.blackOverlay = blackOverlay;
		this.shaktiContainer = shaktiContainer;
		this.shaktiBar = shaktiBar;
		this.shaktiMask = shaktiMask;
		this.energybar3 = energybar3;
		this.impact = impact;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	shadows;
	/** @type {Phaser.GameObjects.Image} */
	almirahs;
	/** @type {Phaser.GameObjects.Image} */
	shelf;
	/** @type {Phaser.GameObjects.Image} */
	chair;
	/** @type {Phaser.GameObjects.Image} */
	tablept1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	kid;
	/** @type {Phaser.GameObjects.Image} */
	tablept2;
	/** @type {Phaser.GameObjects.Image} */
	energycontainer;
	/** @type {Phaser.GameObjects.Image} */
	energybar;
	/** @type {Phaser.GameObjects.Image} */
	energyMask;
	/** @type {Phaser.GameObjects.Image} */
	healthbar3;
	/** @type {Phaser.GameObjects.Image} */
	ellipse_1;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	momCharacter;
	/** @type {Phaser.GameObjects.Image} */
	hitBar;
	/** @type {Phaser.GameObjects.Image} */
	hitBarMask;
	/** @type {Phaser.GameObjects.Image} */
	tth;
	/** @type {Phaser.GameObjects.Image} */
	comboRect;
	/** @type {Phaser.GameObjects.Text} */
	comboText;
	/** @type {Phaser.GameObjects.Image} */
	scoreRect;
	/** @type {Phaser.GameObjects.Text} */
	scoreText;
	/** @type {Phaser.GameObjects.Image} */
	mom;
	/** @type {Phaser.GameObjects.Rectangle} */
	blackOverlay;
	/** @type {Phaser.GameObjects.Image} */
	shaktiContainer;
	/** @type {Phaser.GameObjects.Image} */
	shaktiBar;
	/** @type {Phaser.GameObjects.Image} */
	shaktiMask;
	/** @type {Phaser.GameObjects.Image} */
	energybar3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	impact;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket from PCScene
		this.roomCode = data.roomCode;
    }

	create() {

		this.editorCreate();

		console.log("Hello from HitScene!");

		this.input.setDefaultCursor('');

		this.inGameTheme = this.sound.add('inGameTheme', { volume: 0.8 });
		this.belt1 = this.sound.add('belt1', { volume: 0.4 });
		this.belt2 = this.sound.add('belt2', { volume: 0.4 });
		this.belt3 = this.sound.add('belt3', { volume: 0.4 });
		this.belt4 = this.sound.add('belt4', { volume: 0.4 });
		this.boyCrying = this.sound.add('boyCrying', { volume: 1 });
		this.boyCrying2 = this.sound.add('boyCrying2', { volume: 1 });
		this.boyCrying3 = this.sound.add('boyCrying3', { volume: 0.7 });
		this.cig = this.sound.add('cig', { volume: 0.8 });
		//this.energyCollected = this.sound.add('energyCollected', { volume: 0.4 });
		this.justDrinking = this.sound.add('justDrinking', { volume: 1 });
		this.faint = this.sound.add('faint');
		this.grunt1 = this.sound.add('grunt1', { volume: 1 });
		this.grunt2 = this.sound.add('grunt2', { volume: 0.7 });
		this.grunt3 = this.sound.add('grunt3', { volume: 0.7 });
		this.grunt4 = this.sound.add('grunt4', { volume: 0.7 });
		this.grunt5 = this.sound.add('grunt5', { volume: 1 });
		this.healthDown = this.sound.add('healthDown', { volume: 0.3 });
		this.inGameTheme = this.sound.add('inGameTheme', { volume: 0.45 });
		this.momArrival = this.sound.add('momArrival', { volume: 0.9 });
		this.momFootsteps = this.sound.add('momFootsteps', { volume: 0.9 });
		this.momSatisfied1 = this.sound.add('momSatisfied1', { volume: 0.7 });
		this.momSatisfied2 = this.sound.add('momSatisfied2', { volume: 0.7 });
		this.powerUpActive = this.sound.add('powerUpActive', { volume: 0.3 });
		this.sipping = this.sound.add('sipping', { volume: 0.55 });
		this.swingToHit = this.sound.add('swingToHit', { volume: 0.8, loop: true });
		this.yelp1 = this.sound.add('yelp1', { volume: 0.6 });
		this.yelp2 = this.sound.add('yelp2', { volume: 0.6 });
		this.yelp3 = this.sound.add('yelp3', { volume: 0.6 });
		this.yelp4 = this.sound.add('yelp4', { volume: 0.5 });
		this.yelp5 = this.sound.add('yelp5', { volume: 0.5 });
		this.yelp6 = this.sound.add('yelp6', { volume: 0.5 });
		this.drunk = this.sound.add('drunk', { volume: 0.5, loop: true });
		this.swingToHit = this.sound.add('swingToHit', { volume: 0.7, loop: true });

		this.inGameTheme.play();


		//this.load.audio('doorClose', 'assets/permanent_assets/allsounds/doorclose.mp3');
		//this.load.audio('doorOpen', 'assets/permanent_assets/allsounds/dooropen.mp3');

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		this.graphics = this.add.graphics();

        this.graphics.lineStyle(6, 0xffbd55, 1);

        //  Without this the arc will appear closed when stroked
        this.graphics.beginPath();

        // arc (x, y, radius, startAngle, endAngle, anticlockwise)
        this.graphics.arc(593, 109, 80, Phaser.Math.DegToRad(-90), Phaser.Math.DegToRad(-89.9999), true);

        this.graphics.strokePath();

		this.hitRegistered = false; // Track if a hit was registered
        this.hitCount = 0; // Total number of hits
        this.cooldownTime = 500; // Cooldown period in ms
        this.lastHitTime = 0; // Last hit timestamp
		this.accelData = { x: 0, y: 0, z: 0 }; // Default values

		this.healthVal = 300;

		this.newAngle = { angle: -89.9999 };
		this.totalTime = 120;

		this.hitTimeStart = false;

		this.masterControl = { randomOne: 1000, randomTwo: 4000, shrinkDuration: 2000 };

		this.scoreMapping = 0;

		this.score = 0;
		this.combo = 0;
		this.highestCombo = 0;

		this.idleReset;

		this.currentPowerup;

		this.dhundhlaTween;
		this.allowGraphicsDraw = true;
		//this.increaseHealthActive = false;
		this.cigBurns = false;

		this.momRoaming = false;
		this.momIconFlashing = false;

		this.remainingSeconds = 120;
		this.ending;

		this.momTimeOne = Phaser.Math.Between(60, 100);
		this.momTimeTwo = Phaser.Math.Between(25, 40);
		console.log(`Mom will come in at ${this.momTimeOne} seconds and ${this.momTimeTwo} seconds.`);
		this.momTriggered = {}; // To track if they've already triggered

		this.blackout = false;

		if (!this.socket) {
            console.error("Socket not found in HitScene!");
            return;
        } else {
			console.log(this.socket);
		}

		this.socket.on("receive_accelerometer", (data) => {
			this.accelData = data;
        });

		this.energybar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyMask);
		this.shaktiBar.mask = new Phaser.Display.Masks.BitmapMask(this, this.shaktiMask);
		this.hitBar.mask = new Phaser.Display.Masks.BitmapMask(this, this.hitBarMask);

		this.tweens.add({
            targets: this.newAngle,
            angle: 269.9999,
            duration: this.totalTime * 1000, // 10 seconds
            ease: 'Linear',
            onUpdate: (tween) => {

				let elapsed = tween.elapsed / 1000; // Convert ms to seconds

				let progress = tween.progress; // Get progress (0 to 1)
				// Interpolate masterControl values
				this.masterControl.randomOne = Phaser.Math.Linear(1000, 500, progress);
				this.masterControl.randomTwo = Phaser.Math.Linear(4000, 2000, progress);
				this.masterControl.shrinkDuration = Phaser.Math.Linear(2000, 1000, progress);

                let remainingTime = Math.max(this.totalTime - elapsed, 0); // Prevent negatives
				this.remainingSeconds = Math.floor(remainingTime);


                // Convert to MM:SS format
                let minutes = Math.floor(remainingTime / 60);
                let seconds = Math.floor(remainingTime % 60);
				this.timerText.setText(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

				if (!this.allowGraphicsDraw) return;

                this.graphics.clear();
                this.graphics.lineStyle(6, 0xffbd55, 1);
                this.graphics.beginPath();
                this.graphics.arc(593, 109, 80, Phaser.Math.DegToRad(-90), Phaser.Math.DegToRad(this.newAngle.angle), true);
                this.graphics.strokePath();

            }

			//onStop: () => {
				//this.scene.start("GradeScene");
            //}
        });

		this.spawnBar(); // Start the first appearance

		this.firstSpawnPowerUp = Phaser.Math.Between(7000, 10000);

		this.time.delayedCall(this.firstSpawnPowerUp, () => {
			this.spawnPowerUp();
		});

	}

	reduceHealth(amount) {

			//if (this.increaseHealthActive == true) return;

            // Calculate new width
            const newWidth = this.energyMask.x - amount;

            // Create a tween to animate the width reduction
            this.tweens.add({
                targets: this.energyMask,
                x: newWidth,
                duration: 300,
				ease: 'Cubic.easeInOut' // Duration of the tween in milliseconds
            });

			/*if (!(this.dhundhlaTween) || !(this.dhundhlaTween.isPlaying())) {
				this.minusHealth.setAlpha(1);
			}

			if (this.minusHealthTween) {
				this.minusHealthTween.stop(); // Stop the existing tween if it's running
			}

			this.time.delayedCall(500, () => {
				this.minusHealthTween = this.tweens.add({
					targets: this.minusHealth,
					alpha: 0, 
					duration: 500, 
					ease: 'Linear'
				});
			});*/

		}

		reduceEnergy(amount) {

			//if (this.energyRefillTween?.isPlaying()) {
				//this.energyRefillTween.stop();
			//}

            // Calculate new width
            const newWidth = this.shaktiMask.x - amount;

            // Create a tween to animate the width reduction
            this.energyReduceTween = this.tweens.add({
                targets: this.shaktiMask,
                x: newWidth,
                duration: 300,
				ease: 'Cubic.easeInOut',
				onComplete: () => {
					if (this.shaktiMask.x <= -47) {
						this.blackoutPlayer();
					}
					this.refillEnergy();
				}
            });

		}

		refillEnergy() {

			const currentX = this.shaktiMask.x;
			const fullX = 253;

			// Distance to refill
			const distance = fullX - currentX;

			// Total refill distance = fullX - emptyX
			const totalDistance = fullX + 47; // 91 is the empty position

			// Scale duration based on how much needs to be refilled
			const duration = (distance / totalDistance) * 20000;

			this.energyRefillTween = this.tweens.add({
				targets: this.shaktiMask,
				x: fullX,
				duration: duration,
				ease: 'Linear'
			});
		}

		increaseHealth(amount) {

			//this.increaseHealthActive = true;

			amount = Math.min(30, 300 - this.healthVal);

            // Calculate new width
            const newBigWidth = this.energyMask.x + amount;

            // Create a tween to animate the width increasing
			if (this.healthVal != 300) {
				this.tweens.add({
					targets: this.energyMask,
					x: newBigWidth,
					duration: 300,
					ease: 'Cubic.easeInOut' // Duration of the tween in milliseconds
				});
			}


			//this.plusHealth.setAlpha(1);

			//if (this.plusHealthTween) {
				//this.plusHealthTween.stop(); // Stop the existing tween if it's running
			//}

			/*this.time.delayedCall(500, () => {
				this.plusHealthTween = this.tweens.add({
					targets: this.plusHealth,
					alpha: 0, 
					duration: 500, 
					ease: 'Linear'
				});
			});*/

		}

	spawnBar() {

		let randomDelay = Phaser.Math.Between(this.masterControl.randomOne, this.masterControl.randomTwo); // Random delay (2s - 5s)

		this.time.delayedCall(randomDelay, () => {
			this.hitTimeStart = true;
			console.log(`Delay is ${randomDelay} seconds!`);
			this.hitBar.setVisible(true);

			this.hitBarTween = this.tweens.add({
				onStart: () => {
					this.swingToHit.play();
					this.tth.setVisible(true);
					this.hitBar.clearTint();
					this.tthTween = this.tweens.add({
    					targets: this.tth, 
    					scaleX: 0.23, 
    					scaleY: 0.23, 
						duration: 150, 
						ease: 'Cubic.easeInOut', // Smooth cubic easing
						yoyo: true, // Shrink back after expanding
						repeat: -1 // Infinite loop
					});
				},
				targets: this.hitBarMask,
				scaleX: 0, // Shrinks from both sides
				duration: this.masterControl.shrinkDuration, 
				ease: 'Linear',
				onUpdate: (tween) => {
					const progress = tween.progress; // Tween progress (0 to 1)
					// Define colors: Green → Yellow → Red
					const startRGB = Phaser.Display.Color.IntegerToColor(0x00ff00); // Green
					const midRGB = Phaser.Display.Color.IntegerToColor(0xffff00); // Yellow
					const endRGB = Phaser.Display.Color.IntegerToColor(0xff0000); // Red

					let r, g, b;

					if (progress < 0.5) {
						// Interpolate between Green (start) and Yellow (mid)
						const subProgress = progress * 2; // Normalize to 0 → 1 within this range
						r = Phaser.Math.Linear(startRGB.red, midRGB.red, subProgress);
						g = Phaser.Math.Linear(startRGB.green, midRGB.green, subProgress);
						b = Phaser.Math.Linear(startRGB.blue, midRGB.blue, subProgress);
					} else {
						// Interpolate between Yellow (mid) and Red (end)
						const subProgress = (progress - 0.5) * 2; // Normalize to 0 → 1 within this range
						r = Phaser.Math.Linear(midRGB.red, endRGB.red, subProgress);
						g = Phaser.Math.Linear(midRGB.green, endRGB.green, subProgress);
						b = Phaser.Math.Linear(midRGB.blue, endRGB.blue, subProgress);
					}

					// Convert to a single color and apply
					const newColor = Phaser.Display.Color.GetColor(r, g, b);
					this.hitBar.setTint(newColor);
				},
				onComplete: () => {
					if (!this.hitRegistered) {
						this.combo = 0;
						this.comboText.setVisible(false);
						this.comboRect.setVisible(false);
					}
					this.hitTimeStart = false;
					this.tthTween.stop();
					this.swingToHit.stop();
					this.tth.setVisible(false);
					this.hitBar.setVisible(false); // Hide when done
					this.hitBarMask.setScale(0.53, 0.25); // Reset scale for next appearance
					this.tth.setScale(0.2);
					this.spawnBar(); // Schedule next bar appearance
				}
			});
		});
    }

	spawnPowerUp() {

		if (this.powerupActive) return; // Prevent multiple powerups when active

		this.powerupActive = true; // Mark powerup as active

		console.log("Started new powerup spawn!");

		const words = ['Alcohol_2', 'Cigarette_Butt', 'Energy'];
		const randomWord = Phaser.Utils.Array.GetRandom(words);
		this.currentPowerup = randomWord;

		const powerUp = this.physics.add.sprite(-50, Phaser.Math.Between(190, 546), randomWord);
		powerUp.setScale(randomWord === 'Alcohol_2' ? 0.22 : randomWord === 'Cigarette_Butt' ? 0.146 : 0.146);
		powerUp.setDepth(1);

		this.activePowerUp = powerUp; // Store reference

		const targetX = this.cameras.main.width + 80;
		const targetY = Phaser.Math.Between(190, 546);

		console.log("Powerup floating across screen...");

		powerUp.tween = this.tweens.add({
			targets: powerUp,
			x: targetX,
			y: targetY,
			duration: 3000,
			ease: 'Sine.easeOut',
			onStart: () => {
				this.time.delayedCall(50, () => {
					this.powerUpActive.play();
				});
			},
			onComplete: () => {
				if (powerUp.active) {
					powerUp.destroy();
					console.log("Powerup destroyed!");
				}
				this.powerupActive = false; // Allow new powerups
				this.activePowerUp = null; // Clear it
				const spawnTime = Phaser.Math.Between(4000, 8000);
				this.powerUpTimer = this.time.delayedCall(spawnTime, this.spawnPowerUp, [], this);
			}
		});

	}


	collectPowerUp() {

		if (!this.activePowerUp) return;

		if (this.activePowerUp.tween && this.activePowerUp.tween.isPlaying()) {
			this.activePowerUp.tween.stop();
		}

		this.powerupJustCollected = true;

		this.time.delayedCall(100, () => {
			this.powerupJustCollected = false;
		});


		this.activePowerUp.destroy();     // Destroy powerup
		this.activePowerUp = null;        // Clear reference
		this.swingToHit.stop();

		this.powerupActive = false;       // Allow new powerups
		this.powerUpTimer?.remove();      // Stop delayed call

		if (this.currentPowerup == 'Alcohol_2') {

			/*const fx1 = this.kid.preFX.addBlur();
			const fx2 = this.background.preFX.addBlur();
			const fx3 = this.tth.preFX.addBlur();
			const fx4 = this.hitBar.preFX.addBlur();
			const fx5 = this.momCharacter.preFX.addBlur();
			const fx6 = this.mom.preFX.addBlur();
			const fx7 = this.shadows.preFX.addBlur();
			const fx8 = this.almirahs.preFX.addBlur();
			const fx9 = this.shelf.preFX.addBlur();
			const fx10 = this.chair.preFX.addBlur();
			const fx11 = this.tablept1.preFX.addBlur();
			const fx12 = this.tablept2.preFX.addBlur();*/


			this.dhundhlaTween = this.tweens.add({
				targets: this.blackOverlay,
				alpha: 0.6,
				duration: 1000,
				yoyo: true,
				repeat: 5,
				onStart: () => {
					[this.comboText, this.comboRect, this.scoreText, this.scoreRect,
					this.timerText, this.ellipse_1, this.energybar,
					this.energycontainer, this.shaktiBar, this.shaktiContainer, this.energybar3, this.healthbar3].forEach(obj => obj.setVisible(false));

					this.blackOverlay.setVisible(true);

					//this.inGameTheme.pause();
					this.justDrinking.play();
					this.drunk.play();

					this.inGameTheme.setDetune(-50);
					this.inGameTheme.setRate(0.85);

					this.tweens.add({
						targets: this.cameras.main,
						x: { from: -2, to: 2 },
						y: { from: -1, to: 1 },
						duration: 1000,
						ease: 'Sine.easeInOut',
						yoyo: true,
						repeat: 5
					});

				},
				onUpdate: () => {
					this.allowGraphicsDraw = false;
					this.graphics.clear(); // Clear once
				},
				onComplete: () => {
					this.allowGraphicsDraw = true;
					this.blackOverlay.setVisible(false);
					this.inGameTheme.setDetune(0);
					this.inGameTheme.setRate(1);
					/*this.kid.preFX.clear();
					this.background.preFX.clear();
					this.tth.preFX.clear();
					this.hitBar.preFX.clear();
					this.momCharacter.preFX.clear();
					this.mom.preFX.clear();
					this.shadows.preFX.clear();
					this.almirahs.preFX.clear();
					this.shelf.preFX.clear();
					this.chair.preFX.clear();
					this.tablept1.preFX.clear();
					this.tablept2.preFX.clear();*/
					//this.inGameTheme.resume();
					this.drunk.stop();
					const spawnTime = Phaser.Math.Between(4000, 8000);
					this.powerUpTimer = this.time.delayedCall(spawnTime, this.spawnPowerUp, [], this);
					[this.scoreText, this.scoreRect,
					this.timerText, this.ellipse_1, this.energybar,
					this.energycontainer, this.shaktiBar, this.shaktiContainer, this.energybar3, this.healthbar3].forEach(obj => obj.setVisible(true));
					if (this.combo >= 2) {
						this.comboRect.setVisible(true);
						this.comboText.setVisible(true);
					}
				}
			});

		} else if (this.currentPowerup == 'Energy') {

			this.cigBurns = false;
			const healAmount = 30;
			const actualHeal = Math.min(healAmount, 300 - this.healthVal);
			this.increaseHealth(actualHeal); // Call this before updating healthVal
			this.sipping.play();
			this.healthVal += actualHeal;
			if (this.healthVal < 300) {
				this.kid.play("hitonce");
			} else {
				this.kid.play("neutralstudy");
			}
			console.log(`Health is ${this.healthVal}!`);
			const spawnTime = Phaser.Math.Between(4000, 8000);
			this.powerUpTimer = this.time.delayedCall(spawnTime, this.spawnPowerUp, [], this);

		} else if (this.currentPowerup == 'Cigarette_Butt') {

			this.cigBurns = true;
			this.impact.anims.stop();
			this.belt1.stop();
			this.belt2.stop();
			this.belt3.stop();
			this.belt4.stop();
			//this.hitCount += 1;
			this.reduceHealth(45);
			this.healthVal -= 45;
			this.cig.play();
			this.time.delayedCall(520, () => {
				this.yelp3.play();
			});
			console.log(`Health is ${this.healthVal}!`);
			const spawnTime = Phaser.Math.Between(4000, 8000);
			this.powerUpTimer = this.time.delayedCall(spawnTime, this.spawnPowerUp, [], this);

		} else {

			const spawnTime = Phaser.Math.Between(4000, 8000);
			this.powerUpTimer = this.time.delayedCall(spawnTime, this.spawnPowerUp, [], this);

		}

		console.log("Powerup collected! Starting new instance of powerup...");
	}

	momMechanic() {

		if (this.powerupActive || this.activePowerUp) {
			this.time.delayedCall(200, () => {
				this.momMechanic();
			});
			return;
		} else {

			console.log("No powerup. Commencing mom mechanic!");

			this.powerUpTimer?.remove();
			this.powerupActive = false;
			this.activePowerUp = null;

			this.momTween = this.tweens.chain({
				targets: this.mom,
				tweens: [
					{ alpha: 1, duration: 300, ease: 'Linear' },
					{ alpha: 0.5, duration: 300, ease: 'Linear', yoyo: true, repeat: 1 },
					{ alpha: 0.5, duration: 150, ease: 'Linear', yoyo: true, repeat: 3 },
					{ alpha: 0, duration: 100, ease: 'Linear' }
				],
				onStart: () => {
					this.momIconFlashing = true;
					this.time.delayedCall(100, () => {
						this.momArrival.play();
					});
				},
				onComplete: () => {
					this.momWalkCycle();
					this.momIconFlashing = false;
				}
			});


		}

	}

	momWalkCycle() {

		this.momWalkTween = this.tweens.chain({
			targets: this.momCharacter,
			tweens: [
				{
					x: 460,
					duration: 2000,
					ease: 'Linear',
					onStart: () => {
						//this.momCharacter.setOrigin(0.5, 0.5); // Facing right
						//this.momCharacter.setScale(3.6, 3.6);
						this.momCharacter.play('momwalksright');
						this.momFootsteps.play();
					},
					onComplete: () => {
						this.momFootsteps.stop();
					}
				},
				{
					x: 460.01,
					duration: 2000,
					ease: 'Linear',
					onStart: () => {
						this.momCharacter.play('momappreciating');
						this.time.delayedCall(1250, () => {
							this.choice = Phaser.Math.Between(0, 1);
							if (this.choice == 0) {
								this.momSatisfied1.play();
							} else {
								this.momSatisfied2.play();
							}
						});
					}
				},
				{
					x: -130,
					duration: 2000,
					ease: 'Linear',
					onStart: () => {
						this.momCharacter.play('momwalksleft');
						this.momFootsteps.play();
					},
					onComplete: () => {
						this.momFootsteps.stop();
					}
				}
			],
			onStart: () => {
				this.momRoaming = true;
			},
			onComplete: () => {
				this.momRoaming = false;
				this.momCharacter.anims.stop();
				const spawnTime = Phaser.Math.Between(4000, 8000);
				this.powerUpTimer = this.time.delayedCall(spawnTime, this.spawnPowerUp, [], this);
			}
		});

	}

	blackoutPlayer() {

		this.blackout = true;

		const chance = Phaser.Math.Between(1, 100); // Random number between 1 and 100

		// Show black screen
		this.blackOverlay.setVisible(true);
		this.blackOverlay.setAlpha(0);
		this.tweens.add({
			targets: this.blackOverlay,
			alpha: 1,
			duration: 500,
			onStart: () => {
				this.faint.play();
				this.powerUpTimer?.remove();
				this.powerupActive = false;
				this.activePowerUp = null;
				if (this.dhundhlaTween?.isPlaying()) {
					this.dhundhlaTween.stop();
				}
			},
			onUpdate: () => {
				this.allowGraphicsDraw = false;
				this.graphics.clear();
			}
		});


		this.time.delayedCall(3000, () => {
			if (chance <= 30) {
				this.socket.off("phone_disconnected");
				this.sound.stopAll();
				this.scene.start('RanAwayScene', { socket: this.socket, roomCode: this.roomCode, 
				hitCount: this.hitCount, maxCombo: this.highestCombo, finalScore: this.score });
			} else {
				this.tweens.add({
					targets: this.blackOverlay,
					alpha: 0,
					duration: 500,
					onStart: () => {

						/*if (this.inGameTheme.isPaused) {
							this.inGameTheme.resume();
						}*/
						this.drunk.stop();

						this.inGameTheme.setDetune(0);
						this.inGameTheme.setRate(1);

						[this.scoreText, this.scoreRect,
						this.timerText, this.ellipse_1, this.energybar,
						this.energycontainer, this.shaktiBar, this.shaktiContainer].forEach(obj => obj.setVisible(true));
						if (this.combo >= 2) {
							this.comboRect.setVisible(true);
							this.comboText.setVisible(true);
						}		
					},
					onComplete: () => {
						this.allowGraphicsDraw = true;
						this.blackOverlay.setVisible(false);
						this.blackout = false;
						const spawnTime = Phaser.Math.Between(4000, 8000);
						this.powerUpTimer = this.time.delayedCall(spawnTime, this.spawnPowerUp, [], this);
					}
				});
			}
		});
	}





	update() {

		let now = Date.now();
        if (now - this.lastHitTime < this.cooldownTime) return; // Cooldown active

        // Get latest accelerometer data
        let { x , y , z } = this.accelData;

		if (this.remainingSeconds == this.momTimeOne && !this.momTriggered.one) {
			this.momMechanic();
			console.log(`Mom coming in for the first time at ${this.remainingSeconds} seconds!`);
			this.momTriggered.one = true;
		}

		if (this.remainingSeconds == this.momTimeTwo && !this.momTriggered.two) {
			this.momMechanic();
			console.log(`Mom coming in for the second time at ${this.remainingSeconds} seconds!`);
			this.momTriggered.two = true;
		}

		if (this.blackout == true || this.dhundhlaTween?.isPlaying()) {
			this.allowGraphicsDraw = false;
			this.graphics.clear();
		} else {
			this.allowGraphicsDraw = true;
		}

		//console.log(`Remaining time is ${this.remainingSeconds} seconds!`);

		if (this.hitCount == 0 && this.remainingSeconds <= 80 && 
		this.momRoaming == false && this.momIconFlashing == false) {
			this.socket.off("phone_disconnected");
			this.sound.stopAll();
			this.scene.start("HappyEnding", { socket: this.socket, roomCode: this.roomCode, 
			hitCount: this.hitCount, maxCombo: this.highestCombo, finalScore: this.score });
		}

		if (this.healthVal <= 0) {
			this.socket.off("phone_disconnected");
			this.sound.stopAll();
			this.scene.start("SuicideCutscene", { socket: this.socket, roomCode: this.roomCode, 
			hitCount: this.hitCount, maxCombo: this.highestCombo, finalScore: this.score });
		}

		if (this.remainingSeconds <= 0) {

			this.ending = 'neutral';

			this.socket.off("phone_disconnected");

			this.currentAnimKey = this.kid.anims.currentAnim?.key;

			this.sound.stopAll();

			this.scene.start('PostHit', { socket: this.socket, roomCode: this.roomCode, 
			hitCount: this.hitCount, maxCombo: this.highestCombo, finalScore: this.score, 
			ending: this.ending, kidanim: this.currentAnimKey });

		}

        // Check if any axis exceeds 20
        if ((Math.abs(x) > 20 || Math.abs(y) > 20 || Math.abs(z) > 20) && this.blackout == false) {

			if ((!this.activePowerUp) || (this.activePowerUp && this.activePowerUp == 'Cigarette_Butt')) {
				this.swingToHit.stop();
				this.hitCount += 1; // Increment hit counter
			}

            console.log(`HIT #${this.hitCount} Registered! X: ${Math.round(x*100)/100}, Y: ${Math.round(y*100)/100}, Z: ${Math.round(z*100)/100}`);

			//this.text_1.setText("HIT!");
			//this.text_2.setText(`Hits: ${this.hitCount}`);

			//if (this.energyRefillTween?.isPlaying() && 
			//!(this.activePowerUp && this.activePowerUp == 'Energy')) {
				//this.energyRefillTween.stop();
			//}

			if (!this.activePowerUp) {
				this.reduceEnergy(60);
			}

            this.hitRegistered = true; // Store hit
            this.lastHitTime = now; // Start cooldown

			if (this.momRoaming == true) {
				this.sound.stopAll();
				this.belt1.play();
				this.time.delayedCall(334, () => {
					this.kid.play("hitthrice");
					this.socket.off("phone_disconnected");
					this.scene.start("MomLeaving", { socket: this.socket, roomCode: this.roomCode, 
					momPosition: this.momCharacter.x, 
					hitCount: this.hitCount, maxCombo: this.highestCombo, finalScore: this.score });
				});
			}

			this.collectPowerUp();

			if (this.hitRegistered == true) {
				if (this.powerupJustCollected == true && this.currentPowerup == 'Energy') {
					if (this.healthVal >= 270) {
						this.kid.play("neutralstudy");
					} else {
						this.kid.play("hitonce");
					}

					this.idleReset?.remove(); // Cancel the previous timer if it exists

				} else {

					this.idleReset?.remove(); // Cancel the previous timer if it exists

					if (this.cigBurns == true && this.kid.anims.currentAnim.key != "ciganim") {
						this.grunt5.play();
						this.kid.play("ciganim");
					} else if (this.kid.anims.currentAnim.key == "ciganim") {
						if ((!this.powerupJustCollected) || (!this.dhundhlaTween?.isPlaying())) {
							this.impact.play("impactanim");
							this.grunt1.play();
							this.choice = Phaser.Math.Between(0, 3);
							if (this.momRoaming != true) {
								if (this.choice == 0) {
									this.belt1.play();
								} else if (this.choice == 1) {
									this.belt2.play();
								} else if (this.choice == 2) {
									this.belt3.play();
								} else {
									this.belt4.play();
								}
							}
							this.time.delayedCall(334, () => {
								this.time.delayedCall(450, () => {
									this.yelpchoice = Phaser.Math.Between(0, 5);
									if (this.yelpchoice == 0) {
										this.yelp1.play();
									} else if (this.yelpchoice == 1) {
										this.yelp2.play();
									} else if (this.yelpchoice == 2) {
										this.yelp3.play();
									} else if (this.yelpchoice == 3) {
										this.yelp4.play();
									} else if (this.yelpchoice == 4) {
										this.yelp5.play();
									} else {
										this.yelp6.play();
									}
								});
							});
						}
					} else if (this.kid.anims.currentAnim.key === "neutralstudy") {
						if ((!this.powerupJustCollected) || (!this.dhundhlaTween?.isPlaying())) {
							this.impact.play("impactanim");
							this.grunt1.play();
							this.choice = Phaser.Math.Between(0, 3);
							if (this.momRoaming != true) {
								if (this.choice == 0) {
									this.belt1.play();
								} else if (this.choice == 1) {
									this.belt2.play();
								} else if (this.choice == 2) {
									this.belt3.play();
								} else {
									this.belt4.play();
								}
							}
							this.time.delayedCall(334, () => {
								this.kid.play("hitonce");
								this.time.delayedCall(450, () => {
									this.yelpchoice = Phaser.Math.Between(0, 5);
									if (this.yelpchoice == 0) {
										this.yelp1.play();
									} else if (this.yelpchoice == 1) {
										this.yelp2.play();
									} else if (this.yelpchoice == 2) {
										this.yelp3.play();
									} else if (this.yelpchoice == 3) {
										this.yelp4.play();
									} else if (this.yelpchoice == 4) {
										this.yelp5.play();
									} else {
										this.yelp6.play();
									}
								});
							});
						}
					} else if (this.kid.anims.currentAnim.key === "hitonce") {
						if ((!this.powerupJustCollected) || (!this.dhundhlaTween?.isPlaying())) {
							this.impact.play("impactanim");
							this.grunt2.play();
							this.choice = Phaser.Math.Between(0, 3);
							if (this.momRoaming != true) {
								if (this.choice == 0) {
									this.belt1.play();
								} else if (this.choice == 1) {
									this.belt2.play();
								} else if (this.choice == 2) {
									this.belt3.play();
								} else {
									this.belt4.play();
								}
							}
							this.time.delayedCall(334, () => {
								this.kid.play("hittwice");
								this.time.delayedCall(450, () => {
									this.yelpchoice = Phaser.Math.Between(0, 5);
									if (this.yelpchoice == 0) {
										this.yelp1.play();
									} else if (this.yelpchoice == 1) {
										this.yelp2.play();
									} else if (this.yelpchoice == 2) {
										this.yelp3.play();
									} else if (this.yelpchoice == 3) {
										this.yelp4.play();
									} else if (this.yelpchoice == 4) {
										this.yelp5.play();
									} else {
										this.yelp6.play();
									}
								});
							});
						}
					} else if (this.kid.anims.currentAnim.key === "hittwice") {
						if ((!this.powerupJustCollected) || (!this.dhundhlaTween?.isPlaying())) {
							this.impact.play("impactanim");
							this.grunt3.play();
							this.choice = Phaser.Math.Between(0, 3);
							if (this.momRoaming != true) {
								if (this.choice == 0) {
									this.belt1.play();
								} else if (this.choice == 1) {
									this.belt2.play();
								} else if (this.choice == 2) {
									this.belt3.play();
								} else {
									this.belt4.play();
								}
							}
							this.time.delayedCall(334, () => {
								this.kid.play("hitthrice");
								this.time.delayedCall(450, () => {
									this.yelpchoice = Phaser.Math.Between(0, 2);
									if (this.yelpchoice == 0) {
										this.boyCrying.play();
									} else if (this.yelpchoice == 1) {
										this.boyCrying2.play();
									} else {
										this.boyCrying3.play();
									}
								});
							});
						}

					} else if (this.kid.anims.currentAnim.key === "hitthrice") {
						if ((!this.powerupJustCollected) || (!this.dhundhlaTween?.isPlaying())) {
							this.impact.play("impactanim");
							this.grunt4.play();
							this.choice = Phaser.Math.Between(0, 3);
							if (this.momRoaming != true) {
								if (this.choice == 0) {
									this.belt1.play();
								} else if (this.choice == 1) {
									this.belt2.play();
								} else if (this.choice == 2) {
									this.belt3.play();
								} else {
									this.belt4.play();
								}
							}
							this.time.delayedCall(334, () => {
								this.kid.play("hittwice");
								this.time.delayedCall(450, () => {
									this.yelpchoice = Phaser.Math.Between(0, 5);
									if (this.yelpchoice == 0) {
										this.yelp1.play();
									} else if (this.yelpchoice == 1) {
										this.yelp2.play();
									} else if (this.yelpchoice == 2) {
										this.yelp3.play();
									} else if (this.yelpchoice == 3) {
										this.yelp4.play();
									} else if (this.yelpchoice == 4) {
										this.yelp5.play();
									} else {
										this.yelp6.play();
									}
								});
							});
						}
					}

					if (this.cigBurns == false) {
						this.idleReset = this.time.delayedCall(5000, () => {  
							this.kid.play("hitonce"); // Switch back to idle after 5 seconds
						});
					}
				}
			}

            // Reset hit after cooldown
            this.time.delayedCall(this.cooldownTime, () => {
                this.hitRegistered = false;
            });

			if (this.hitTimeStart) { // If the bar tween is running

				if (!this.powerupJustCollected) {

					this.scoreMapping = Math.round(Phaser.Math.Linear(200, 75, this.hitBarTween.progress)/5)*5;
					this.score += this.scoreMapping;
					this.scoreText.setText(`Score: ${this.score}`);
					this.combo += 1;
					if (this.highestCombo < this.combo) {
						this.highestCombo = this.combo;
					}
					this.comboText.setText(`COMBO X${this.combo}`);

					if (this.combo >= 2 && (!this.dhundhlaTween || !this.dhundhlaTween.isPlaying())) {

						this.comboText.setVisible(true);
						this.comboRect.setVisible(true);

						this.comboTween = this.tweens.add({
							targets: this.comboRect,
							scaleX: 0.25,
							scaleY: 0.22,
							duration: 100, 
							ease: 'Linear',
							yoyo: true,
							onStart: () => {
								this.comboTextTween = this.tweens.add({
									targets: this.comboText,
										scaleX: 1.15,
										scaleY: 1.15,
										duration: 100, 
										ease: 'Linear',
										yoyo: true
								});
							}
						});

					}

				} else if (this.powerupJustCollected && this.currentPowerup == 'Cigarette_Butt') {

					if (this.combo >= 2) {
						this.comboText.setVisible(true);
						this.comboRect.setVisible(true);
					}

				} else if (this.powerupJustCollected && this.currentPowerup == 'Energy') {

					this.combo = 0;
					this.comboText.setVisible(false);
					this.comboRect.setVisible(false);

				}

				this.hitBarTween.stop(); // Stop tween
				this.tthTween.stop(); // Stop text animation
				this.tth.setVisible(false);
				this.hitBar.setVisible(false);
				this.hitBarMask.setScale(0.53, 0.25); // Reset scale for next appearance
				this.tth.setScale(0.2);

				this.spawnBar(); // Restart the bar cycle

			} else {

				if (!this.powerupJustCollected) {
					this.time.delayedCall(100, () => {
						this.healthDown.play();
					});
					this.reduceHealth(30);
					this.healthVal -= 30;
					console.log(`Health is ${this.healthVal}!`);
				}

				this.combo = 0;
				this.comboText.setVisible(false);
				this.comboRect.setVisible(false);
			}

			this.hitTimeStart = false;

		}

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
