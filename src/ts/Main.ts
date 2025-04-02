import {settings} from "./settings";
import {Animation} from "./framework25/Animation";
import {iAnimatable} from "./framework25/types/iAnimatable";
import {Background} from "./iAnimatables/Background";
import {Ground} from "./iAnimatables/Ground";
import {Birdie} from "./iAnimatables/Birdie";
import {iGameStatus} from "./types/iGameStatus";

class FlappyBird {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: CanvasImageSource;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly birdie: Birdie;
    private readonly animation: Animation;
    private iAnimatables: iAnimatable[];
    private gameStatus: iGameStatus;


    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.gameStatus = {
            isStarted: false,
        }
        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;
        this.addEventListeners();
        this.background = new Background(this.sprite, this.ctx);
        this.ground = new Ground(this.sprite, this.ctx, this.canvas);
        this.birdie = new Birdie(this.sprite, this.ctx, this.canvas, this.gameStatus);
        this.iAnimatables = [this.background, this.ground, this.birdie];
        this.animation = new Animation(this.ctx, this.canvas, this.iAnimatables);
    }

    addEventListeners() {
        // @ts-ignore
        this.sprite.addEventListener("load", () => {
            this.animation.start();
        });

        window.addEventListener("keydown", () => {
            this.gameStatus.isStarted = true;
        });
    }

}

new FlappyBird();
