import {settings} from "./settings";
import {FrameDrawer} from "./framework25/FrameDrawer";

export class Background extends FrameDrawer {
    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D,) {
        super(sprite, ctx, settings.background.frame);
    }
}