import {iFrame} from "./types/iFrame";

export class FrameDrawer {
    private sprite: CanvasImageSource;
    private ctx: CanvasRenderingContext2D;
    protected frame: iFrame;

    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, frame: iFrame) {
        this.sprite = sprite;
        this.ctx = ctx;
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