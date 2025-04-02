import {DrawFrame} from "../framework25/DrawFrame";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {settings} from "../settings";

export class Background extends DrawFrame implements iAnimatable {
    constructor(ctx: CanvasRenderingContext2D, sprite: CanvasImageSource) {
        super(ctx, sprite, settings.background.frame);
    }

    animate() {
        this.draw();
    }
}