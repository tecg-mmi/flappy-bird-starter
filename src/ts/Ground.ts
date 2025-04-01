import {settings} from "./settings";
import {DrawFrame} from "./framework25/DrawFrame";

export class Ground extends DrawFrame {
    private canvas: HTMLCanvasElement;
    private maxOffset: number;


    constructor(ctx: CanvasRenderingContext2D, sprite: CanvasImageSource, canvas: HTMLCanvasElement) {
        super(ctx, sprite, settings.ground.frame);
        this.canvas = canvas;
        this.frame.dy = this.canvas.height - this.frame.dh;
        this.frame.dx = 0;
        this.maxOffset = -(settings.ground.frame.sw - this.canvas.width);
    }
    update() {
        this.frame.dx--;
        if (this.frame.dx <= this.maxOffset) {
            this.frame.dx = 0;
        }
    }

    animate() {
        this.update();
        this.draw();
    }
}