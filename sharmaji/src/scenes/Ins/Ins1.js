
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Ins1 extends Phaser.Scene {

	constructor() {
		super("Ins1");

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

		// tablept2
		const tablept2 = this.add.image(636, 356, "tablept2");
		tablept2.scaleX = 0.67;
		tablept2.scaleY = 0.67;

		// tth
		const tth = this.add.image(640, 492, "swingandhit");
		tth.scaleX = 0.2;
		tth.scaleY = 0.2;
		tth.visible = false;

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

		// smallPaper
		const smallPaper = this.add.image(492, 333, "smallPaper");
		smallPaper.scaleX = 0.18298549331858502;
		smallPaper.scaleY = 0.18298549331858502;
		smallPaper.visible = false;

		// text
		const text = this.add.text(494, 317, "", {});
		text.setOrigin(0.5, 0.5);
		text.visible = false;
		text.text = "Nice! Beta was hit by the belt and your apathy!";
		text.setStyle({ "color": "#000000ff", "fontFamily": "CeraProRegular", "fontSize": "28px" });
		text.setWordWrapWidth(222);

		// next2
		const next2 = this.add.image(565, 505, "smallnext");
		next2.scaleX = 0.18;
		next2.scaleY = 0.18;
		next2.visible = false;

		// skip2
		const skip2 = this.add.image(407, 501, "smallskip");
		skip2.scaleX = 0.18;
		skip2.scaleY = 0.18;
		skip2.visible = false;

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
		this.tth = tth;
		this.hitBar = hitBar;
		this.hitBarMask = hitBarMask;
		this.smallPaper = smallPaper;
		this.text = text;
		this.next2 = next2;
		this.skip2 = skip2;
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
	tth;
	/** @type {Phaser.GameObjects.Image} */
	hitBar;
	/** @type {Phaser.GameObjects.Image} */
	hitBarMask;
	/** @type {Phaser.GameObjects.Image} */
	smallPaper;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Image} */
	next2;
	/** @type {Phaser.GameObjects.Image} */
	skip2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	impact;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.hitCount = 0;

		this.input.setDefaultCursor('');

		this.swingToHit = this.sound.add('swingToHit', { volume: 0.8, loop: true });
		this.belt1 = this.sound.add('belt1', { volume: 0.4 });
		this.buttonClick = this.sound.add('buttonClick', { volume: 0.6 });
		this.yelp5 = this.sound.add('yelp5', { volume: 1 });

		this.socket.on("phone_disconnected", () => {
    		console.log("🚨 Phone disconnected! Pausing game...");
			console.log("Scene paused!");
			this.scene.pause();
			const currentSceneKey = this.scene.key;
    		this.scene.launch("TempScene", { socket: this.socket, roomCode: this.roomCode, pausedScene: currentSceneKey });
		});

		this.hitBar.mask = new Phaser.Display.Masks.BitmapMask(this, this.hitBarMask);

		this.tth.setVisible(true);
		this.hitBar.setVisible(true);

		this.accelData = { x: 0, y: 0, z: 0 }; // Default values

		this.socket.on("receive_accelerometer", (data) => {
			this.accelData = data;
        });

		this.hitBarTween = this.tweens.add({
				onStart: () => {
					this.swingToHit.play();
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
				duration: 3000, // Time for bar to shrink (3 seconds)
				ease: 'Linear',
				repeat: -1,
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
				}

			});

	}

	displayMessage() {

		this.socket.off("receive_accelerometer");

		this.time.delayedCall(1334, () => {

			this.skip2.setVisible(true);
			this.next2.setVisible(true);
			this.smallPaper.setVisible(true);
			this.text.setVisible(true);

			this.skip2.setInteractive();
			this.next2.setInteractive();

			// Change cursor to hand when hovering
			this.skip2.on('pointerover', () => {
				this.input.setDefaultCursor('pointer'); // Change cursor to hand
			});
			this.next2.on('pointerover', () => {
				this.input.setDefaultCursor('pointer'); // Change cursor to hand
			});

			// Change cursor back to default when not hovering
			this.skip2.on('pointerout', () => {
				this.input.setDefaultCursor(''); // Reset cursor to default
			});
			this.next2.on('pointerout', () => {
				this.input.setDefaultCursor(''); // Reset cursor to default
			});

			// Optional: Add a click event
			this.skip2.on('pointerdown', () => {
				this.socket.off("phone_disconnected");
				this.buttonClick.play();
				this.sound.stopByKey('mainMenuTheme');
				this.scene.start('PreHit', { socket: this.socket, roomCode: this.roomCode });
			});
			this.next2.on('pointerdown', () => {
				this.socket.off("phone_disconnected");
				this.buttonClick.play();
				this.scene.start('Ins2', { socket: this.socket, roomCode: this.roomCode });
			});


		});

	}

	update() {

		let { x , y , z } = this.accelData;

		if ((Math.abs(x) > 20 || Math.abs(y) > 20 || Math.abs(z) > 20) && this.hitCount == 0) {

			this.impact.play("impactanim");
			this.belt1.play();
			this.swingToHit.stop();

			this.time.delayedCall(334, () => {
				this.kid.play("hitonce");
				this.time.delayedCall(450, () => {
					this.yelp5.play();
				});
			});

			this.hitCount = 1;
		}

		if (this.hitCount != 0) {

			this.hitBarTween.stop();
			this.tthTween.stop();
			this.tth.setVisible(false);
			this.hitBar.setVisible(false);

			this.displayMessage();
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
