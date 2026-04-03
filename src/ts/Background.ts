import {IFrame} from "./framework26/interfaces/IFrame";
import {IBackground} from "./IBackground";

export class Background implements IBackground {

    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    frame: IFrame;


    constructor(background: IBackground) {
        this.sprite = background.sprite;
        this.frame = background.frame;
        this.ctx = background.ctx;
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