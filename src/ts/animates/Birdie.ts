import {Sprite} from "../framework26/Sprite";
import {settings} from "../settings";
import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {GameStatus} from "../framework26/GameStatus";

export class Birdie extends Sprite implements IAnimatable {
    private currentFrameCounter: number;
    private frameCounter: number;
    private readonly maxFrameCounter: number;
    private y: number;
    private x: number;
    private rotation: number;
    private fallSpeed: number;
    private readonly maxFallSpeed: number;
    private readonly gravity: number;

    private gameStatus: GameStatus;

    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D, gameStatus: GameStatus) {

        super({
            ctx: ctx,
            sprite: sprite,
            frame: settings.birdie.frames[0]
        });

        this.gameStatus = gameStatus;

        this.frameCounter = 0;
        this.currentFrameCounter = 0;
        this.maxFrameCounter = settings.birdie.maxFrame;
        this.y = settings.birdie.y;
        this.x = settings.birdie.x;
        this.rotation = 0;
        this.fallSpeed = 0;
        this.maxFallSpeed = settings.birdie.maxFallSpeed;
        this.gravity = settings.birdie.gravity;
    }

    animate(): void {
        this.update();
        this.draw();
    }

    private update() {
        this.frameCounter++;
        if (this.frameCounter === this.maxFrameCounter) {
            this.frameCounter = 0;

            this.currentFrameCounter++;
            if (this.currentFrameCounter >= settings.birdie.frames.length) {
                this.currentFrameCounter = 0;
            }

            this.frame = settings.birdie.frames[this.currentFrameCounter];

            if (this.fallSpeed < this.maxFallSpeed) {
                this.fallSpeed += this.gravity;
            }

            this.y += this.fallSpeed;
        }
        this.rotation = this.fallSpeed/this.maxFallSpeed;

        if (this.y + settings.birdie.height / 2 > this.ctx.canvas.height - settings.ground.frame.sh) {
            this.gameStatus.gameOver = true;
        }
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.rotation);
        this.frame.dx = -settings.birdie.width / 2;
        this.frame.dy = -settings.birdie.height / 2;
        super.draw();
        this.ctx.restore();
    }


    goUp() {
        this.fallSpeed = -this.maxFallSpeed;
    }
}