import {settings} from "./settings";

export class Background {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;
    private readonly sprite: HTMLImageElement;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, image: HTMLImageElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.sprite = image;
    }

    draw() {
        this.ctx.drawImage(this.sprite,
            settings.background.frame.sx,
            settings.background.frame.sy,
            settings.background.frame.sw,
            settings.background.frame.sh,
            0, 0,
            this.canvas.width,
            this.canvas.height);
    }
}