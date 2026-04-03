import {Loop} from "./framework26/core/Loop";
import {settings} from "./settings";
import {Background} from "./Background";
import {Ground} from "./Ground";
import {IAnimatable} from "./framework26/interfaces/IAnimatable";

class Main {
    private readonly loop: Loop;
    private readonly sprite: HTMLImageElement;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly iAnimates: IAnimatable[] = [];

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');

        this.loop = new Loop(() => {
            this.animate();
        });

        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;

        this.background = new Background(
            this.sprite,
            this.ctx
        );

        this.ground = new Ground(
            this.sprite,
            this.ctx,
        );

        this.iAnimates.push(this.background);
        this.iAnimates.push(this.ground);

        this.sprite.addEventListener('load', () => {
            // ici, on a l'image en mémoire...
            this.loop.start();
        });

    }

    animate() {
        console.log("test")
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.iAnimates.forEach((objToAnimate) => {
            objToAnimate.animate();
        });
    }
}

new Main();