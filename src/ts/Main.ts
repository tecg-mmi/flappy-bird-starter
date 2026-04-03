import {Loop} from "./framework26/core/Loop";
import {settings} from "./settings";
import {Background} from "./Background";
import {Ground} from "./Ground";

class Main {
    private readonly loop: Loop;
    private readonly sprite: HTMLImageElement;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly background: Background;
    private readonly ground: Ground;

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

        this.sprite.addEventListener('load', () => {
            // ici, on a l'image en mémoire...
            this.background.draw();
            this.ground.draw();
        });


    }

    animate() {
        // gérer l'animation...
    }
}

new Main();