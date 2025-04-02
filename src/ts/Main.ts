import {settings} from "./settings";
import {Background} from "./Background";
import {Ground} from "./Ground";
import {Animation} from "./framework25/Animation";

class FlappyBird {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly animation: Animation;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.sprite = new Image();
        this.sprite.src = settings.spriteSRC;
        this.background = new Background(this.ctx, this.sprite);
        this.ground = new Ground(this.ctx, this.sprite, this.canvas);
        this.animation = new Animation(this.canvas, this.ctx);
        this.animation.registeriAnimatable(this.background)
        this.animation.registeriAnimatable(this.ground);
        this.addEventListeners();
    }

    addEventListeners() {
        this.sprite.addEventListener("load", () => {
            this.animation.start();
        });
    }
}

new FlappyBird();