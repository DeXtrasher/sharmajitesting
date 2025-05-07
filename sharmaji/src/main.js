import Preload from "./scenes/Preload.js";
import PCScene from "./scenes/PCScene.js";
import HitScene from "./scenes/HitScene.js";
import TempScene from "./scenes/TempScene.js";
import Play from "./scenes/Play.js";
import SuicideCutscene from "./scenes/SuicideCutscene.js";
import MomLeaving from "./scenes/MomLeaving.js";
import RanAwayScene from "./scenes/RanAwayScene.js";
import ResultsScene from "./scenes/ResultsScene.js";
import HappyEnding from "./scenes/HappyEnding.js";
import TutoScene11 from "./scenes/TutoScene11.js";
import TutoScene12 from "./scenes/TutoScene12.js";
import UnholyBelt from "./scenes/UnholyBelt.js";
import Ins1 from "./scenes/Ins/Ins1.js";
import Ins2 from "./scenes/Ins/Ins2.js";
import Ins3 from "./scenes/Ins/Ins3.js";
import Ins4 from "./scenes/Ins/Ins4.js";
import Ins5 from "./scenes/Ins/Ins5.js";
import Ins66 from "./scenes/Ins/Ins66.js";
import Ins7 from "./scenes/Ins/Ins7.js";
import Ins8 from "./scenes/Ins/Ins8.js";
import Ins9 from "./scenes/Ins/Ins9.js";
import StatsScene from "./scenes/StatsScene.js";
import StatsScene2 from "./scenes/StatsScene2.js";
import StatsScene3 from "./scenes/StatsScene3.js";
import StatsScene4 from "./scenes/StatsScene4.js";
import PreHit from "./scenes/PreHit.js";
import PostHit from "./scenes/PostHit.js";


//import PreloadScreen from "./scenes/PreloadScreen.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade',
			arcade: {
				debug: false,
				gravity: {
					x: 0, y: 0
				}
			}
		}
	});

	game.scene.add("Boot", Boot, true);
	game.scene.add("Preload", Preload, true);
	game.scene.add("PCScene", PCScene, false);
	game.scene.add("HitScene", HitScene, false);
	game.scene.add("TempScene", TempScene, false);
	game.scene.add("Play", Play, false);
	game.scene.add("SuicideCutscene", SuicideCutscene, false);
	game.scene.add("MomLeaving", MomLeaving, false);
	game.scene.add("RanAwayScene", RanAwayScene, false);
	game.scene.add("ResultsScene", ResultsScene, false);
	game.scene.add("HappyEnding", HappyEnding, false);
	game.scene.add("TutoScene11", TutoScene11, false);
	game.scene.add("TutoScene12", TutoScene12, false);
	game.scene.add("UnholyBelt", UnholyBelt, false);
	game.scene.add("Ins1", Ins1, false);
	game.scene.add("Ins2", Ins2, false);
	game.scene.add("Ins3", Ins3, false);
	game.scene.add("Ins4", Ins4, false);
	game.scene.add("Ins5", Ins5, false);
	game.scene.add("Ins66", Ins66, false);
	game.scene.add("Ins7", Ins7, false);
	game.scene.add("Ins8", Ins8, false);
	game.scene.add("Ins9", Ins9, false);
	game.scene.add("StatsScene", StatsScene, false);
	game.scene.add("StatsScene2", StatsScene2, false);
	game.scene.add("StatsScene3", StatsScene3, false);
	game.scene.add("StatsScene4", StatsScene4, false);
	game.scene.add("PreHit", PreHit, false);
	game.scene.add("PostHit", PostHit, false);
	//game.scene.add("PreloadScreen", PreloadScreen, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		//this.scene.stop("Play");
		//this.scene.stop("HitScene");
		//this.scene.stop("PCScene");
		//this.scene.stop("TempScene");
		//this.scene.start("Preload"); 

	}
}