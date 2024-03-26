import {IAnimatable} from "../Types/IAnimatable";
import {Tube} from "./Tube";
import {settings} from "../settings";
import {Random} from "../../framework/helpers/Random";
import {Stoppable} from "./Stoppable";
import {IGameStatus} from "../Types/IGameStatus";

export class TubesPair extends Stoppable implements IAnimatable {
    public readonly tubes: Tube[] = [];
    frameCounter = 0;
    maxFrameInterval = settings.tubes.maxFrameInterval.min;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, status: IGameStatus) {
        super(ctx, canvas, sprite, status);
        this.tubes.push(new Tube(ctx, canvas, sprite));
    }

    update() {
        if (this.status.isStarted) {
            if (this.frameCounter++ >= this.maxFrameInterval) {
                if (this.tubes.length > settings.tubes.maxTubesPairs) {
                    this.tubes.shift();
                }
                this.tubes.push(new Tube(this.ctx, this.canvas, this.sprite));
                this.maxFrameInterval = Random.int(settings.tubes.maxFrameInterval.min, settings.tubes.maxFrameInterval.max);
                this.frameCounter = 0;
            }
            this.tubes.forEach(tube => {
                tube.update();
            });
        }
    }

    draw() {
        this.tubes.forEach(tube => {
            tube.draw();
        });
    }


}