import {Sprite} from "./framework26/Sprite";
import {settings} from "./settings";

export class Ground extends Sprite {

    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        super({
            sprite: sprite,
            ctx: ctx,
            frame: settings.ground.frame,
        });
        this.frame.dy = this.ctx.canvas.height - settings.ground.frame.sh;
    }

}