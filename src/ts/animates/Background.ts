import {IBackground} from "./IBackground";
import {Sprite} from "../framework26/Sprite";
import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {settings} from "../settings";

export class Background extends Sprite implements IBackground, IAnimatable {

    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        super({
            sprite: sprite,
            ctx: ctx,
            frame: settings.background.frame,
        });
    }

    animate(): void {
        this.draw();
    }

}