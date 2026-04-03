import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {Sprite} from "../framework26/Sprite";
import {Frame} from "../framework26/Frame";
import {settings} from "../settings";


export class Ground extends Sprite implements IAnimatable {

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