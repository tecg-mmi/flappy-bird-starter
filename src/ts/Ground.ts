import {Sprite} from "./framework26/Sprite";
import {settings} from "./settings";
import {IAnimatable} from "./framework26/interfaces/IAnimatable";

export class Ground extends Sprite implements IAnimatable {

    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        super({
            sprite: sprite,
            ctx: ctx,
            frame: settings.ground.frame,
        });
        this.frame.dy = this.ctx.canvas.height - settings.ground.frame.sh;
    }

    animate(): void {
        // udpate dx
        this.draw();
    }

}