import {IAnimatable} from "../Types/IAnimatable";
import {settings} from "../settings";
import {Stoppable} from "./Stoppable";
import {IGameStatus} from "../Types/IGameStatus";
import {IPosition} from "../../framework/types/iPosition";
import {Collision} from "../../framework/helpers/Collision";
import {IObject} from "../../framework/types/IObject";
import {Tube} from "./Tube";

export class Birdie extends Stoppable implements IAnimatable, IObject {

    animationStep: number;
    step: number;
    fallSpeed: number;
    public position: IPosition;
    private readonly maxAnimationStep: number;
    frameCounter = 0;
    maxFrameInterval = settings.birdie.maxFrameInterval;
    public width: number = settings.birdie.width;
    public height: number = settings.birdie.height;
    private tubes: Tube[];


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, status: IGameStatus, tubes: Tube[]) {
        super(ctx, canvas, sprite, status);
        this.position = {x: this.canvas.width / 3, y: this.canvas.height / 2};
        this.maxAnimationStep = settings.birdie.frames.length - 1;
        this.fallSpeed = 0;
        this.step = 0;
        this.tubes = tubes;
    }

    update(): void {
        if (this.status.isStarted) {
            if (this.fallSpeed < settings.birdie.maxFallSpeed) {
                this.fallSpeed += settings.birdie.gravity;
            }
            this.checkCollisionWithGround();
            this.checkCollisionWithTubes();
            this.position.y += this.fallSpeed;
        }
    }

    draw(): void {
        if (this.frameCounter++ >= this.maxFrameInterval) {
            this.frameCounter = 0;
            this.step = this.step < this.maxAnimationStep ? this.step + 1 : 0;
        }
        this.ctx.save()
        this.ctx.translate(this.position.x, this.position.y)
        this.ctx.rotate(this.fallSpeed / settings.birdie.maxFallSpeed);
        this.ctx.drawImage(
            this.sprite,
            settings.birdie.frames[this.step].sx,
            settings.birdie.frames[this.step].sy,
            this.width,
            this.height,
            -this.width/2,
            -this.height/2,
            this.width,
            this.height,
        )
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        this.ctx.restore()
    }

    goUp() {
        this.fallSpeed = -settings.birdie.maxFallSpeed;
    }

    checkCollisionWithGround() {
        const ground = this.canvas.height - settings.ground.frame.sh;
        if (this.position.y + this.height / 2 > ground) {
            this.position.y = ground - this.height / 2;
            this.goUp();
        }
    }

    checkCollisionWithTubes() {
        this.tubes.forEach(tube => {
            if (Collision.checkCollisionInterface(this, tube.top) || Collision.checkCollisionInterface(this, tube.bottom)) {
                cancelAnimationFrame(this.status.requestAnimationFrameID);
            }
        })
    }
}