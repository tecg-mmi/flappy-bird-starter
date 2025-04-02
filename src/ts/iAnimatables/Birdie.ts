import {FrameDrawer} from "../framework25/FrameDrawer";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {settings} from "../settings";
import {iGameStatus} from "../types/iGameStatus";

export class Birdie extends FrameDrawer implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private currentFrame: number = 0;
    private frameCounter: number = 0;
    private gameStatus: iGameStatus;
    private fallSpeed: number = 0;

    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, gameStatus: iGameStatus) {
        super(sprite, ctx, settings.birdie.frames[0]);
        this.gameStatus = gameStatus;
        this.canvas = canvas;
    }

    update() {
        this.updateFrame();

        if (this.gameStatus.isStarted) {
            if (this.fallSpeed < settings.birdie.maxFallSpeed) {
                this.fallSpeed += settings.birdie.gravity;
            }
            this.frame.dy += this.fallSpeed;
        }
        this.rotation = this.fallSpeed / settings.birdie.maxFallSpeed;

    }

    private updateFrame() {
        this.frameCounter++;
        if (this.frameCounter >= settings.birdie.maxFrameRate) {
            this.frameCounter = 0;
            this.currentFrame++;
            if (this.currentFrame >= settings.birdie.frames.length) {
                this.currentFrame = 0;
            }
        }
        this.frame.sx = settings.birdie.frames[this.currentFrame].sx;
        this.frame.sy = settings.birdie.frames[this.currentFrame].sy;
    }

    animate() {
        this.update();
        this.draw();
    }
}