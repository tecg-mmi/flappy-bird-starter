import {Loop} from "./framework26/core/Loop";
import {settings} from "./settings";
import {Background} from "./Background";

class Main {
    private loop: Loop;
    private sprite: HTMLImageElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private background: Background;

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

        this.sprite.addEventListener('load', () => {
            // ici, on a l'image en mémoire...
            this.background.draw();
        });


    }

    animate() {
        // gérer l'animation...
    }
}

new Main();