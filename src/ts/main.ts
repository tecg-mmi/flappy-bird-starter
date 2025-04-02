import {Background} from "./Background";
import {settings} from "./settings";
import {Ground} from "./Ground";
import {Bird} from "./Bird";
import {Animation} from "./framework25/Animation";
import {iAnimatable} from "./framework25/types/iAnimatable";

class FlappyBird {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: CanvasImageSource;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly bird: Bird;
    private readonly animation: Animation;
    private iAnimatables: iAnimatable[];


    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;
        this.addEventListeners();
        this.background = new Background(this.sprite, this.ctx);
        this.ground = new Ground(this.sprite, this.ctx, this.canvas);
        this.bird = new Bird(this.sprite, this.ctx, this.canvas);
        this.iAnimatables = [this.background, this.ground, this.bird];

        this.animation = new Animation(this.ctx, this.canvas, this.iAnimatables);
    }

    addEventListeners() {
        // @ts-ignore
        this.sprite.addEventListener("load", () => {
            this.animation.start();
        })
    }

}

new FlappyBird();
