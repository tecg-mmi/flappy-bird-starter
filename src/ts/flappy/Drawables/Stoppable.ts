import {Drawable} from "./Drawable";
import {IGameStatus} from "../Types/IGameStatus";

export abstract class Stoppable extends Drawable {
    protected status: IGameStatus;

    protected constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, status: IGameStatus) {
        super(ctx, canvas, sprite);
        this.status = status;
    }
}