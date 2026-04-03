import {Sprite} from "../framework26/Sprite";
import {settings} from "../settings";
import {IAnimatable} from "../framework26/interfaces/IAnimatable";

export class Birdie extends Sprite implements IAnimatable {
    private currentFrameCounter: number;
    private frameCounter: number;
    private maxFrameCounter: number;
    private y: number;
    private x: number;
    private rotation: number;


    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {

        super({
            ctx: ctx,
            sprite: sprite,
            frame: settings.birdie.frames[0]
        });

        this.frameCounter = 0;
        this.currentFrameCounter = 0;
        this.maxFrameCounter = settings.birdie.maxFrame;
        this.y = settings.birdie.y;
        this.x = settings.birdie.x;
        this.rotation = 0;
    }

    animate(): void {

        this.frameCounter++;

        if (this.frameCounter === this.maxFrameCounter) {
            this.frameCounter = 0;

            this.currentFrameCounter++;
            if (this.currentFrameCounter >= settings.birdie.frames.length) {
                this.currentFrameCounter = 0;
            }
            this.frame = settings.birdie.frames[this.currentFrameCounter];
        }

        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.rotation += 0.01;
        this.ctx.rotate(this.rotation);
        this.frame.dx = -settings.birdie.width / 2;
        this.frame.dy = -settings.birdie.height - 1 / 2;
        this.draw();
        this.ctx.restore();
    }
}