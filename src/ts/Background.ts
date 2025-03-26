import {settings} from "./settings";
import {DrawFrame} from "./framework25/DrawFrame";

export class Background extends DrawFrame {
    constructor(ctx: CanvasRenderingContext2D, sprite: CanvasImageSource) {
        super(ctx, sprite, settings.background.frame);
    }
}