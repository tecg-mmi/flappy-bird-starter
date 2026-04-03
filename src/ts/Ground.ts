import {Sprite} from "./framework26/Sprite";
import {settings} from "./settings";
import {Frame} from "./framework26/Frame";

export class Ground extends Sprite {

    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        super({
            sprite: sprite,
            ctx: ctx,
            frame: new Frame(settings.ground.frame),
        });
        this.frame.dy = this.ctx.canvas.height - settings.ground.frame.sh;
    }

    update() {
        this.frame.dx--;

        if (this.frame.dx <= -(settings.ground.frame.sw - this.ctx.canvas.width)) {
            this.frame.dx = 0;
        }
    }

    animate() {
        this.update();
        this.draw();
    }

}