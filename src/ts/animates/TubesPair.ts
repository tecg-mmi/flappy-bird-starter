import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {Frame} from "../framework26/Frame";
import {settings} from "../settings";

export class TubesPair implements IAnimatable {

    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    top: Frame;
    bottom: Frame;


    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        this.sprite = sprite;
        this.ctx = ctx;

        this.top = new Frame(settings.background.frame);
        this.bottom = new Frame(settings.tubesPair.bottom);
    }

    animate(): void {
        this.draw();
    }

    draw() {

        this.ctx.drawImage(
            this.sprite,
            this.top.sx,
            this.top.sy,
            this.top.sw,
            this.top.sh,
            this.top.dx,
            this.top.dy,
            this.top.dw,
            this.top.dh,
        );
    }

}