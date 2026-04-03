import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {Frame} from "../framework26/Frame";
import {settings} from "../settings";
import {Birdie} from "./Birdie";

export class TubesPair implements IAnimatable {
    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    top: Frame;
    bottom: Frame;
    private x: number;
    private birdie: Birdie;

    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D, birdie:Birdie) {
        this.sprite = sprite;
        this.ctx = ctx;
        this.top = new Frame(settings.tubesPair.top);
        this.bottom = new Frame(settings.tubesPair.bottom);
        this.x = this.ctx.canvas.width + settings.tubesPair.top.sw;
        this.birdie = birdie;
    }

    animate(): void {
        this.x--;

        if (this.x < -settings.tubesPair.top.sw) {
            this.x = this.ctx.canvas.width + settings.tubesPair.top.sw
        }



        this.draw();
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            this.top.sx,
            this.top.sy,
            this.top.sw,
            this.top.sh,
            this.x,
            this.top.dy,
            this.top.dw,
            this.top.dh,
        );

        this.ctx.drawImage(
            this.sprite,
            this.bottom.sx,
            this.bottom.sy,
            this.bottom.sw,
            this.bottom.sh,
            this.x,
            this.bottom.dy,
            this.bottom.dw,
            this.bottom.dh,
        );
    }

}