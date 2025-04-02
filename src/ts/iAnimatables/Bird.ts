import {FrameDrawer} from "../framework25/FrameDrawer";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {settings} from "../settings";

export class Bird extends FrameDrawer implements iAnimatable {
    private canvas: HTMLCanvasElement;

    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(sprite, ctx, settings.birdie.frames[0]);
        this.canvas = canvas;
        this.frame.dx = this.canvas.width * settings.birdie.dxRatio;
        this.frame.dy = (this.canvas.height - settings.ground.frame.sh) / 2;
    }

    animate() {
        this.draw();
    }
}