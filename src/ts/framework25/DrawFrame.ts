import {iFrame} from "./types/iFrame";

export class DrawFrame {
    private ctx: CanvasRenderingContext2D;
    private sprite: CanvasImageSource;
    protected frame: iFrame;

    constructor(ctx: CanvasRenderingContext2D, sprite: CanvasImageSource, frame: iFrame) {
        this.ctx = ctx;
        this.sprite = sprite;
        this.frame = frame;
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            this.frame.sx,
            this.frame.sy,
            this.frame.sw,
            this.frame.sh,
            this.frame.dx,
            this.frame.dy,
            this.frame.dw,
            this.frame.dh,
        );
    }

}