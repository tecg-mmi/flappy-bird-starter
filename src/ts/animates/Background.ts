import {IBackground} from "./IBackground";
import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {IFrame} from "../framework26/interfaces/IFrame";
import {settings} from "../settings";
import {Sprite} from "../framework26/Sprite";

export class Background extends Sprite implements IBackground, IAnimatable {

    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    frame: IFrame;


    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        super({
            sprite: sprite,
            ctx: ctx,
            frame: settings.background.frame,
        });
    }

    draw() {
        this.ctx.drawImage(this.sprite,
            this.frame.sx,
            this.frame.sy,
            this.frame.sw,
            this.frame.sh,
            this.frame.dx,
            this.frame.dy,
            this.frame.dw,
            this.frame.dh,
        )
    }

    animate() {
        this.draw();
    }
}