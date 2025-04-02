import {iFrame} from "./types/iFrame";

export class FrameDrawer {
    private sprite: CanvasImageSource;
    private ctx: CanvasRenderingContext2D;
    protected frame: iFrame;
    protected rotation: number;

    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, frame: iFrame, rotation: number = 0) {
        this.sprite = sprite;
        this.ctx = ctx;
        this.frame = frame;
        this.rotation = rotation;
    }

    draw() {
        this.ctx.save();
        if (this.rotation !== 0) {
            this.ctx.translate(this.frame.dx, this.frame.dy);
            this.ctx.rotate(this.rotation);
            this.ctx.drawImage(
                this.sprite,
                this.frame.sx,
                this.frame.sy,
                this.frame.sw,
                this.frame.sh,
                -this.frame.dw / 2,
                -this.frame.dh / 2,
                this.frame.dw,
                this.frame.dh,
            );
        } else {
            this.ctx.drawImage(
                this.sprite,
                this.frame.sx,
                this.frame.sy,
                this.frame.sw,
                this.frame.sh,
                this.frame.dx,
                this.frame.dy,
                this.frame.dw,
                this.frame.dh,);
        }

        this.ctx.restore();
    }
}