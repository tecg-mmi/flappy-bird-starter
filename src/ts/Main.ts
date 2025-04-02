import {settings} from "./settings";
import {Animation} from "./framework25/Animation";
import {Background} from "./iAnimatables/Background";
import {Ground} from "./iAnimatables/Ground";
import {Birdie} from "./iAnimatables/Birdie";
import {iGameStatus} from "./iGameStatus";

class FlappyBird {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly birdie: Birdie;
    private readonly animation: Animation;
    private gameStatus: iGameStatus;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;
        this.background = new Background(this.ctx, this.sprite);
        this.gameStatus = {isStarted: false};
        this.ground = new Ground(this.ctx, this.sprite, this.canvas);
        this.animation = new Animation(this.canvas, this.ctx);
        this.birdie = new Birdie(this.ctx, this.sprite, this.canvas, this.gameStatus, this.animation);
        this.animation.registeriAnimatable(this.background)
        this.animation.registeriAnimatable(this.ground);
        this.animation.registeriAnimatable(this.birdie);
        this.addEventListeners();
    }

    addEventListeners() {
        this.sprite.addEventListener("load", () => {
            this.animation.start();
        });
        window.addEventListener("keydown", (evt) => {
            if (evt.key === "ArrowUp" || evt.key === " ") {
                this.gameStatus.isStarted = true;
                this.birdie.goUp();
            }
        })
    }
}

new FlappyBird();