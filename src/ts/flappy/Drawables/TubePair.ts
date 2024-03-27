import {IAnimatable} from "../Types/IAnimatable";
import {settings} from "../settings";
import {Random} from "../../framework/helpers/Random";
import {Drawable} from "./Drawable";
import {IObject} from "../../framework/types/IObject";

export class TubePair extends Drawable implements IAnimatable {
    public top: IObject;
    public bottom: IObject;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        super(ctx, canvas, sprite);
        this.top = {
            position: {x: canvas.width, y: Random.int(settings.tubes.randomY.min, settings.tubes.randomY.max)},
            width: settings.tubes.dw,
            height: settings.tubes.dh
        };
        this.bottom = {
            position: {x: canvas.width, y: this.top.position.y + settings.tubes.sh + settings.tubes.gap},
            width: settings.tubes.dw,
            height: settings.tubes.dh
        };
    }

    update() {
        this.top.position.x -= settings.tubes.speed;
        this.bottom.position.x -= settings.tubes.speed;
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.tubes.top.sx,
            settings.tubes.top.sy,
            settings.tubes.sw,
            settings.tubes.sh,
            this.top.position.x,
            this.top.position.y,
            settings.tubes.dw,
            settings.tubes.dh,
        );

        this.ctx.drawImage(
            this.sprite,
            settings.tubes.bottom.sx,
            settings.tubes.bottom.sy,
            settings.tubes.sw,
            settings.tubes.sh,
            this.bottom.position.x,
            this.bottom.position.y,
            settings.tubes.dw,
            settings.tubes.dh,
        );

    }
}