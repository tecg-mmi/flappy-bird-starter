import {settings} from "./settings";

export class Ground {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;
    private readonly sprite: HTMLImageElement;
    private maxOffset: number = 0;
    private dx: number = 0;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, image: HTMLImageElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.sprite = image;
        this.maxOffset = settings.ground.frame.sw - this.canvas.width;
    }

    update() {
        if (this.dx <= -this.maxOffset) {
            this.dx = 0;
        }
        this.dx -= settings.ground.speed;
    }

    draw() {
        this.ctx.drawImage(this.sprite,
            settings.ground.frame.sx,
            settings.ground.frame.sy,
            settings.ground.frame.sw,
            settings.ground.frame.sh,
            this.dx,
            this.canvas.height - settings.ground.frame.dh,
            settings.ground.frame.dw,
            settings.ground.frame.dh);
    }
}