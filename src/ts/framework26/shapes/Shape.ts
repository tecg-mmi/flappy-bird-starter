import {IOrigin} from "../interfaces/IOrigin";
import {IStroke} from "../interfaces/IStroke";
import {IShape} from "../interfaces/shapes/IShape";

export abstract class Shape implements IShape {
    public readonly ctx: CanvasRenderingContext2D;
    public readonly origin: IOrigin;
    public readonly color: string;
    public readonly rotation: number;
    public readonly stroke?: IStroke;

    protected constructor(shape: IShape) {
        this.ctx = shape.ctx;
        this.origin = shape.origin;
        this.color = shape.color;
        this.rotation = shape.rotation ?? 0;
        this.stroke = shape.stroke;
    }

    protected fillAndStroke() {
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        if (this.stroke) {
            this.ctx.strokeStyle = this.stroke.color;
            this.ctx.lineWidth = this.stroke.width;
            this.ctx.stroke();
        }

    }

    protected rotateAndTranslate() {
        this.ctx.translate(this.origin.x, this.origin.y);
        this.ctx.rotate(this.rotation);
        this.ctx.beginPath();

    }
}