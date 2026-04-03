import {Loop} from "./framework26/core/Loop";
import {settings} from "./settings";
import {Background} from "./Background";
import {Ground} from "./Ground";
import {IAnimate} from "./framework26/interfaces/IAnimate";

class Main {
    private readonly loop: Loop;
    private readonly sprite: HTMLImageElement;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly animates: IAnimate[] = [];

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');

        this.loop = new Loop(() => {
            this.animate();
        });

        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;

        this.background = new Background({
            ctx: this.ctx,
            sprite: this.sprite,
            frame: settings.background.frame
        });

        this.ground = new Ground(
            this.sprite,
            this.ctx,
        );

        this.animates.push(this.background);
        this.animates.push(this.ground);

        this.sprite.addEventListener('load', () => {
            this.loop.start();
        });


    }

    animate() {
        this.animates.forEach((objToAnimate) => {
            objToAnimate.animate();
        });
    }
}

new Main();