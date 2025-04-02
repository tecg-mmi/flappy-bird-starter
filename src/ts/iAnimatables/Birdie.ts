import {FrameDrawer} from "../framework25/FrameDrawer";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {settings} from "../settings";
import {iGameStatus} from "../types/iGameStatus";
import {Animation} from "../framework25/Animation";

export class Birdie extends FrameDrawer implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private currentFrame: number = 0;
    private frameCounter: number = 0;
    private gameStatus: iGameStatus;
    private fallSpeed: number = 0;
    private animation: Animation;

    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, gameStatus: iGameStatus, animation: Animation) {
        super(sprite, ctx, settings.birdie.frames[0]);
        this.gameStatus = gameStatus;
        this.canvas = canvas;
        this.animation = animation;
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

        if (this.frame.dy > this.canvas.height - settings.ground.frame.sh) {
            this.animation.stop();
        }
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

    goUp() {
        this.fallSpeed = -settings.birdie.maxFallSpeed;
    }

    animate() {
        this.update();
        this.draw();
    }
}