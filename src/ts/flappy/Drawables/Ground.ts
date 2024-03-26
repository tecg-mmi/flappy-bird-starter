import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";
import {settings} from "../settings";
import {Stoppable} from "./Stoppable";
import {IGameStatus} from "../Types/IGameStatus";

export class Ground extends Stoppable implements IAnimatable {
    private x: number;
    private readonly y: number;
    private readonly maxOffset: number;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, status: IGameStatus) {
        super(ctx, canvas, sprite, status);
        this.x = 0;
        this.y = this.canvas.height - settings.ground.frame.sh;
        this.maxOffset = settings.ground.frame.sw - this.canvas.width;
    }

    update() {
        if (this.x <= -this.maxOffset) {
            this.x = 0;
        } else {
            this.x--;
        }
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.ground.frame.sx,
            settings.ground.frame.sy,
            settings.ground.frame.sw,
            settings.ground.frame.sh,
            this.x,
            this.y,
            settings.ground.frame.dw,
            settings.ground.frame.dh,
        );
    }


}