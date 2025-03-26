import {settings} from "./settings";
import {FrameDrawer} from "./framework25/FrameDrawer";

export class Ground extends FrameDrawer {
    private canvas: HTMLCanvasElement;


    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(sprite, ctx, settings.ground.frame);
        this.canvas = canvas;
        this.frame.dy = this.canvas.height - settings.ground.frame.sh;
    }

    update(delta: number) {
        this.frame.sx++;
        if (true) {

        }
    }
}