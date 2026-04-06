import {Sprite} from "../framework26/Sprite";
import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {settings} from "../settings";
import {GameStatus} from "../framework26/GameStatus";
import {IOrigin} from "../framework26/interfaces/IOrigin";

export class Birdie extends Sprite implements IAnimatable {
    private currentFrame: number;
    private frameCounter: number;
    private maxFrameCounter: number;
    public origin: IOrigin
    private rotation: number;
    private gameStatus: GameStatus;

    private fallSpeed: number;
    private maxFallSpeed: number;
    private gravity: number;


    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D, gameStatus: GameStatus) {
        super({
            ctx: ctx,
            sprite: sprite,
            frame: settings.birdie.frames[0]
        });

        this.origin = {
            x: settings.birdie.x,
            y: settings.birdie.y
        }
        
        this.rotation = 0;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.maxFrameCounter = settings.birdie.maxFrame;
        this.gameStatus = gameStatus;

        this.fallSpeed = 0;
        this.maxFallSpeed = settings.birdie.maxFallSpeed;
        this.gravity = settings.birdie.gravity;

    }

    animate(): void {

        this.frameCounter++;

        if (this.frameCounter === this.maxFrameCounter) {
            this.currentFrame++;
            if (this.currentFrame >= settings.birdie.frames.length) {
                this.currentFrame = 0;
            }
            this.frame = settings.birdie.frames[this.currentFrame];
            this.frameCounter = 0;


            if (this.gameStatus.hasStarted) {
                if (this.fallSpeed < this.maxFallSpeed) {
                    this.fallSpeed += this.gravity;
                }

                this.rotation = this.fallSpeed / this.maxFallSpeed;

                this.origin.y += this.fallSpeed;
            }

        }


        if (this.gameStatus.hasStarted) {
            if (this.checkCollisionWithGround()) {
                this.gameStatus.gameOver = true;
            }
        }

        this.draw();
    }

    private checkCollisionWithGround() {
        return this.origin.y + settings.birdie.height / 2 > this.ctx.canvas.height - settings.ground.frame.dh;
    }

    draw() {
        this.frame.dx = -settings.birdie.width / 2
        this.frame.dy = -settings.birdie.height / 2
        this.ctx.save();
        this.ctx.translate(this.origin.x, this.origin.y);
        this.ctx.rotate(this.rotation);
        super.draw();
        this.ctx.restore();
    }

    goUp() {
        this.fallSpeed = -this.maxFallSpeed;
    }
}