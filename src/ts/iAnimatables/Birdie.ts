import {iAnimatable} from "../framework25/types/iAnimatable";
import {DrawFrame} from "../framework25/DrawFrame";
import {settings} from "../settings";
import {iGameStatus} from "../iGameStatus";
import {Animation} from "../framework25/Animation";

export class Birdie extends DrawFrame implements iAnimatable {
    private canvas: HTMLCanvasElement;
    private currentFrame: number = 0;
    private frameCounter: number = 0;
    private fallSpeed: number = 0;
    private gameStatus: iGameStatus;
    private animation: Animation;

    constructor(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, canvas: HTMLCanvasElement, gameStatus: iGameStatus, animation: Animation) {
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
        this.gameStatus = gameStatus;
        this.animation = animation;
        this.canvas = canvas;
    }

    update() {

        this.frameCounter++;
        if (this.gameStatus.isStarted) {
            if (this.fallSpeed < settings.birdie.maxFallSpeed) {
                this.fallSpeed += settings.birdie.gravity;
            }

            this.frame.dy += this.fallSpeed;
        }

        this.rotation = this.fallSpeed / settings.birdie.maxFallSpeed;

        if (this.frameCounter >= settings.birdie.maxFrame) {
            this.frameCounter = 0;
            this.currentFrame++;
            if (this.currentFrame === settings.birdie.frames.length) {
                this.currentFrame = 0;
            }
            this.frame.sx = settings.birdie.frames[this.currentFrame].sx;
        }

        if (this.frame.dy >= this.canvas.height - settings.ground.frame.dh) {
            this.animation.stop();
        }

    }

    goUp() {
        this.fallSpeed = -settings.birdie.maxFallSpeed;
    }

    animate() {
        this.update();
        this.draw();
    }
}