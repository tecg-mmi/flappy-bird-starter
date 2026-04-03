import {Sprite} from "../framework26/Sprite";
import {settings} from "../settings";
import {IAnimatable} from "../framework26/interfaces/IAnimatable";

export class Birdie extends Sprite implements IAnimatable {
    private currentFrameCounter: number;
    private frameCounter: number;
    private maxFrameCounter: number;


    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {

        super({
            ctx: ctx,
            sprite: sprite,
            frame: settings.birdie.frames[0]
        });

        this.frameCounter = 0;
        this.currentFrameCounter = 0;
        this.maxFrameCounter = settings.birdie.maxFrame;
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


        this.draw();
    }
}