
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { io } from "https://cdn.socket.io/4.7.2/socket.io.esm.min.js";
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressBar
		const progressBar = this.add.rectangle(320, 378, 256, 20);
		progressBar.scaleX = 2.5;
		progressBar.scaleY = 2;
		progressBar.setOrigin(0, 0);
		progressBar.visible = false;
		progressBar.isFilled = true;
		progressBar.fillColor = 11269547;

		// progressBarBg
		const progressBarBg = this.add.rectangle(320, 378, 256, 20);
		progressBarBg.scaleX = 2.5;
		progressBarBg.scaleY = 2;
		progressBarBg.setOrigin(0, 0);
		progressBarBg.visible = false;
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(553, 295, "", {});
		loadingText.visible = false;
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "Chunkfive", "fontSize": "36px" });

		// loadingText_1
		const loadingText_1 = this.add.text(640, 360, "", {});
		loadingText_1.setOrigin(0.5, 0.5);
		loadingText_1.text = "Getting everything ready, hold on...";
		loadingText_1.setStyle({ "align": "center", "color": "#e0e0e0", "fontSize": "36px", "fontStyle": "bold" });

		this.progressBar = progressBar;
		this.progressBarBg = progressBarBg;
		this.loadingText = loadingText;
		this.loadingText_1 = loadingText_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;
	/** @type {Phaser.GameObjects.Rectangle} */
	progressBarBg;
	/** @type {Phaser.GameObjects.Text} */
	loadingText;
	/** @type {Phaser.GameObjects.Text} */
	loadingText_1;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.audio('321go', 'assets/permanent_assets/allsounds/321go.mp3');
		this.load.audio('belt1', 'assets/permanent_assets/allsounds/belt1.mp3');
		this.load.audio('belt2', 'assets/permanent_assets/allsounds/belt2.mp3');
		this.load.audio('belt3', 'assets/permanent_assets/allsounds/belt3.mp3');
		this.load.audio('belt4', 'assets/permanent_assets/allsounds/belt4.mp3');
		this.load.audio('boyCrying', 'assets/permanent_assets/allsounds/boycrying.mp3');
		this.load.audio('boyCrying2', 'assets/permanent_assets/allsounds/boycrying-2.mp3');
		this.load.audio('boyCrying3', 'assets/permanent_assets/allsounds/boycrying-3.mp3');
		this.load.audio('boyHappy', 'assets/permanent_assets/allsounds/boyhappy-2.mp3');
		this.load.audio('buttonClick', 'assets/permanent_assets/allsounds/buttonclick.mp3');
		this.load.audio('cameraClick', 'assets/permanent_assets/allsounds/cameraclick.mp3');
		this.load.audio('cig', 'assets/permanent_assets/allsounds/cig.mp3');
		this.load.audio('cryingRunning', 'assets/permanent_assets/allsounds/cryingrunningaudio.mp3');
		this.load.audio('dhamDhamDham', 'assets/permanent_assets/allsounds/dhamdhamdham.mp3');
		//this.load.audio('doorClose', 'assets/permanent_assets/allsounds/doorclose.mp3');
		//this.load.audio('doorOpen', 'assets/permanent_assets/allsounds/dooropen.mp3');
		this.load.audio('drumrollFanfare', 'assets/permanent_assets/allsounds/drumrollfanfare.mp3');
		this.load.audio('drumrollQuack', 'assets/permanent_assets/allsounds/drumrollquack.mp3');
		this.load.audio('drunk', 'assets/permanent_assets/allsounds/drunk.mp3');
		this.load.audio('energyCollected', 'assets/permanent_assets/allsounds/energycollected.mp3');
		this.load.audio('faint', 'assets/permanent_assets/allsounds/faint.mp3');
		this.load.audio('grunt1', 'assets/permanent_assets/allsounds/grunt-1.mp3');
		this.load.audio('grunt2', 'assets/permanent_assets/allsounds/grunt-2.mp3');
		this.load.audio('grunt3', 'assets/permanent_assets/allsounds/grunt-3.mp3');
		this.load.audio('grunt4', 'assets/permanent_assets/allsounds/grunt-4.mp3');
		this.load.audio('grunt5', 'assets/permanent_assets/allsounds/grunt-5.mp3');
		this.load.audio('healthDown', 'assets/permanent_assets/allsounds/healthdown.mp3');
		this.load.audio('mainMenuTheme', 'assets/permanent_assets/allsounds/mainmenu.mp3');
		this.load.audio('inGameTheme', 'assets/permanent_assets/allsounds/ingame.mp3');
		this.load.audio('justDrinking', 'assets/permanent_assets/allsounds/justdrinking.mp3');
		this.load.audio('momAndSonFootsteps', 'assets/permanent_assets/allsounds/momandsonfootsteps.mp3');
		this.load.audio('momAngry', 'assets/permanent_assets/allsounds/momangry.mp3');
		this.load.audio('momArrival', 'assets/permanent_assets/allsounds/momarrival.mp3');
		this.load.audio('momFootsteps', 'assets/permanent_assets/allsounds/momfootsteps.mp3');
		this.load.audio('momSatisfied1', 'assets/permanent_assets/allsounds/momsatisfied-1.mp3');
		this.load.audio('momSatisfied2', 'assets/permanent_assets/allsounds/momsatisfied-2.mp3');
		this.load.audio('outro', 'assets/permanent_assets/allsounds/outro.mp3');
		this.load.audio('policeCar', 'assets/permanent_assets/allsounds/policecar.mp3');
		this.load.audio('powerUpActive', 'assets/permanent_assets/allsounds/powerupfloatingin.mp3');
		this.load.audio('roomJoin', 'assets/permanent_assets/allsounds/roomjoin.mp3');
		this.load.audio('roomLeave', 'assets/permanent_assets/allsounds/roomleave.mp3');
		this.load.audio('runningUnconscious', 'assets/permanent_assets/allsounds/runningunconscious.mp3');
		this.load.audio('schoolBells', 'assets/permanent_assets/allsounds/schoolbells.mp3');
		this.load.audio('sipping', 'assets/permanent_assets/allsounds/sipping.mp3');
		this.load.audio('swingToHit', 'assets/permanent_assets/allsounds/swingtohit.mp3');
		this.load.audio('wakeUp', 'assets/permanent_assets/allsounds/wakeup.mp3');
		this.load.audio('yelp1', 'assets/permanent_assets/allsounds/yelp-1.mp3');
		this.load.audio('yelp2', 'assets/permanent_assets/allsounds/yelp-2.mp3');
		this.load.audio('yelp3', 'assets/permanent_assets/allsounds/yelp-3.mp3');
		this.load.audio('yelp4', 'assets/permanent_assets/allsounds/yelp-4.mp3');
		this.load.audio('yelp5', 'assets/permanent_assets/allsounds/yelp-5.mp3');
		this.load.audio('yelp6', 'assets/permanent_assets/allsounds/yelp-6.mp3');

		this.progressBar.width = 1;

		// Listen for the complete event
        this.load.on('complete', () => {
			this.loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "Chunkfive", "fontSize": "36px" });
			this.loadingText.setVisible(true);
			this.progressBar.setVisible(true);
			this.progressBarBg.setVisible(true);
			this.loadingText_1.setVisible(false);
        });

		this.load.on('progress', (value) => {
			console.log('Loading progress: ', value);
		});

		//const width =  this.progressBar.width;

		//this.load.on("progress", (progress) => {

			//this.progressBar.width = progress * width;

		//});

	}

	create() {

		this.registry.set('statsPlayed', false);

		// Ensure the progress bar starts empty
		this.progressBar.width = 1;

		// Animate progress bar manually over 5 seconds
		this.time.addEvent({
			delay: 40, // Update every 50ms
			repeat: 98, // 100 updates (50ms * 100 = 5000ms or 5s)
			callback: () => {
				this.progressBar.width += 2.56; // Increase width gradually
			},
		});

		if (!this.socket) {
			this.socket = io("wss://radial-extreme-quill.glitch.me", { transports: ["websocket"] });
		}

		this.roomCode = Math.floor(1000 + Math.random() * 9000);


		this.socket.on("connect", () => {
			console.log(`🔗 Connected to WebSocket. ID: ${this.socket.id}`);

			// Create room on server
			this.socket.emit("create_room", this.roomCode);
			this.scene.start("Play", { socket: this.socket, roomCode: this.roomCode }); // Pass socket to PCScene

		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
