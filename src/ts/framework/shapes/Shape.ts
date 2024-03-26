import {IColor} from "../types/IColor";

export abstract class Shape {
    protected readonly ctx: CanvasRenderingContext2D;
    protected color: IColor;
    protected x: number;
    protected y: number;


    protected constructor(ctx: CanvasRenderingContext2D, color: IColor, x: number, y: number) {
        this.ctx = ctx;
        this.color = color;
        this.x = x;
        this.y = y;
    }
}