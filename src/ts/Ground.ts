import {settings} from "./settings";
import {DrawFrame} from "./framework25/DrawFrame";

export class Ground extends DrawFrame {
    private canvas: HTMLCanvasElement;


    constructor(ctx: CanvasRenderingContext2D, sprite: CanvasImageSource, canvas: HTMLCanvasElement) {
        super(ctx, sprite, settings.ground.frame);
        this.canvas = canvas;
        this.frame.dy = this.canvas.height - this.frame.dh;
    }

}