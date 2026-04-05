import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {Frame} from "../framework26/Frame";
import {settings} from "../settings";
import {Birdie} from "./Birdie";
import {GameStatus} from "../framework26/GameStatus";
import {ITubesPair} from "./ITubesPair";
import {Random} from "../framework26/math/Random";

export class TubesPair implements IAnimatable {
    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    top: Frame;
    bottom: Frame;
    private x: number;
    private y: number;
    private gap: number;
    private birdie: Birdie;
    private gameStatus: GameStatus;

    constructor(tubePair: ITubesPair) {
        this.sprite = tubePair.sprite;
        this.ctx = tubePair.ctx;
        this.top = new Frame(settings.tubesPair.top);
        this.bottom = new Frame(settings.tubesPair.bottom);
        this.birdie = tubePair.birdie;
        this.gameStatus = tubePair.gameStatus;
        this.initRandomValues();
    }

    private initRandomValues() {
        this.gap = Random.nextInteger(settings.tubesPair.gap);
        this.x = this.ctx.canvas.width + settings.tubesPair.top.sw;
        this.y = Random.nextInteger(settings.tubesPair.minMaxY);
        this.top.dy = -(this.top.sh - (this.y - this.gap / 2));
        this.bottom.dy = this.y + this.gap / 2;
    }

    animate(): void {
        if (this.gameStatus.hasStarted) {
            this.x--;
            if (this.x < -settings.tubesPair.top.sw) {
                this.initRandomValues()
            }

        }

        this.draw();
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            this.top.sx,
            this.top.sy,
            this.top.sw,
            this.top.sh,
            this.x,
            this.top.dy,
            this.top.dw,
            this.top.dh,
        );

        this.ctx.drawImage(
            this.sprite,
            this.bottom.sx,
            this.bottom.sy,
            this.bottom.sw,
            this.bottom.sh,
            this.x,
            this.bottom.dy,
            this.bottom.dw,
            this.bottom.dh,
        );
    }

}