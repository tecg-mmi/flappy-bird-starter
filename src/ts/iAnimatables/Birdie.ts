import {iAnimatable} from "../framework25/types/iAnimatable";
import {DrawFrame} from "../framework25/DrawFrame";
import {settings} from "../settings";

export class Birdie extends DrawFrame implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private currentFrame: number = 0;
    private frameCounter: number = 0;

    constructor(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, canvas: HTMLCanvasElement) {
        super(ctx, sprite, {
            sx: settings.birdie.frames[0].sx,
            sy: settings.birdie.frames[0].sy,
            sw: settings.birdie.frames[0].sw,
            sh: settings.birdie.frames[0].sh,
            dx: settings.birdie.frames[0].dx,
            dy: settings.birdie.frames[0].dy,
            dw: settings.birdie.frames[0].dw,
            dh: settings.birdie.frames[0].dh,
        });
        this.canvas = canvas;
    }

    update() {

        this.frameCounter++;

        if (this.frameCounter >= settings.birdie.maxFrame) {
            this.frameCounter = 0;

            ++this.currentFrame;
            if (this.currentFrame === settings.birdie.frames.length) {
                this.currentFrame = 0;
            }
            this.frame.sx = settings.birdie.frames[this.currentFrame].sx;
        }
    }

    animate() {
        this.update();
        this.draw();
    }
}