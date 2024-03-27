import {IAnimatable} from "../Types/IAnimatable";
import {TubePair} from "./TubePair";
import {settings} from "../settings";
import {Random} from "../../framework/helpers/Random";
import {Stoppable} from "./Stoppable";
import {IGameStatus} from "../Types/IGameStatus";

export class TubesPairs extends Stoppable implements IAnimatable {
    public readonly tubePairs: TubePair[] = [];
    frameCounter = 0;
    maxFrameInterval = settings.tubes.maxFrameInterval.min;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, status: IGameStatus) {
        super(ctx, canvas, sprite, status);
        this.tubePairs.push(new TubePair(ctx, canvas, sprite));
    }

    update() {
        if (this.status.isStarted) {
            if (this.frameCounter++ >= this.maxFrameInterval) {
                if (this.tubePairs.length > settings.tubes.maxTubesPairs) {
                    this.tubePairs.shift();
                }
                this.tubePairs.push(new TubePair(this.ctx, this.canvas, this.sprite));
                this.maxFrameInterval = Random.int(settings.tubes.maxFrameInterval.min, settings.tubes.maxFrameInterval.max);
                this.frameCounter = 0;
            }
            this.tubePairs.forEach(tube => {
                tube.update();
            });
        }
    }

    draw() {
        this.tubePairs.forEach(tube => {
            tube.draw();
        });
    }


}