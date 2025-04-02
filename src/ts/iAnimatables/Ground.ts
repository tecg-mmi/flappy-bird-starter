import {FrameDrawer} from "../framework25/FrameDrawer";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {settings} from "../settings";

export class Ground extends FrameDrawer implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private readonly maxOffset: number;


    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(sprite, ctx, settings.ground.frame);
        this.canvas = canvas;
        this.maxOffset = -(this.frame.sw - this.canvas.width);
        this.frame.dy = this.canvas.height - settings.ground.frame.sh;
    }

    update() {
        this.frame.dx--;
        if (this.frame.dx < this.maxOffset) {
            this.frame.dx = 0;
        }
    }

    animate() {
        this.update();
        this.draw();
    }

}