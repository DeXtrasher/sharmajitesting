
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Play extends Phaser.Scene {

	constructor() {
		super("Play");

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

		// playbutton
		const playbutton = this.add.image(647, 497, "playbutton");
		playbutton.scaleX = 0.25;
		playbutton.scaleY = 0.25;

		// logoWhiteThick
		const logoWhiteThick = this.add.image(640, 292, "logoWhiteThick");
		logoWhiteThick.scaleX = 0.4326177916157913;
		logoWhiteThick.scaleY = 0.4326177916157913;

		this.background = background;
		this.playbutton = playbutton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	playbutton;

	/* START-USER-CODE */

	// Write your code here

	init(data) {

        this.socket = data.socket; // Get the socket from Preload
		this.roomCode = data.roomCode;

    }

	create() {

		this.editorCreate();

		this.mainMenuTheme = this.sound.add('mainMenuTheme', { loop: true, volume: 0.2 });

		this.buttonClick = this.sound.add('buttonClick', { volume: 0.5 });


		const blurFx = this.background.preFX.addBlur();

		this.tweens.add({
			targets: blurFx,
			strength: 0.3,
			duration: 1000,
			ease: 'Sine.easeInOut',
			yoyo: true,
			repeat: -1
		});



		this.tweens.add({
    		targets: this.playbutton, // Replace with your image object
    		scaleX: 0.33, 
    		scaleY: 0.33, 
    		duration: 500, // 0.5s to expand
    		ease: 'Cubic.easeInOut', // Smooth cubic easing
    		yoyo: true, // Shrink back after expanding
    		repeat: -1 // Infinite loop
		});

		// Set the text object as interactive
        this.playbutton.setInteractive();

        // Change cursor to hand when hovering
        this.playbutton.on('pointerover', () => {
            this.input.setDefaultCursor('pointer'); // Change cursor to hand
        });

        // Change cursor back to default when not hovering
        this.playbutton.on('pointerout', () => {
            this.input.setDefaultCursor(''); // Reset cursor to default
        });

        // Optional: Add a click event
        this.playbutton.on('pointerdown', () => {
            console.log('Going to tutorial scene!');
			this.mainMenuTheme.play();
			this.buttonClick.play();
			this.scene.start('TutoScene11', { socket: this.socket, roomCode: this.roomCode });
        });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
