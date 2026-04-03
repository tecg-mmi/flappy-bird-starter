import {Sprite} from "../framework26/Sprite";
import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {settings} from "../settings";
import {GameStatus} from "../framework26/GameStatus";

export class Birdie extends Sprite implements IAnimatable {
    private currentFrame: number;
    private frameCounter: number;
    private maxFrameCounter: number;
    private x: number;
    private y: number;
    private rotation: number;
    private gameStatus: GameStatus;


    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D, gameStatus: GameStatus) {
        super({
            ctx: ctx,
            sprite: sprite,
            frame: settings.birdie.frames[0]
        });

        this.x = settings.birdie.x;
        this.y = settings.birdie.y;
        this.rotation = 0;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.maxFrameCounter = settings.birdie.maxFrame;
        this.gameStatus = gameStatus;
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
            this.y++;
        }
        if (this.y + settings.birdie.height/2 > this.ctx.canvas.height - settings.ground.frame.dh) {
            this.gameStatus.gameOver = true;
        }

        this.draw();
    }

    draw() {
        this.frame.dx = -settings.birdie.width / 2
        this.frame.dy = -settings.birdie.height / 2
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.rotation);
        super.draw();
        this.ctx.restore();
    }
}