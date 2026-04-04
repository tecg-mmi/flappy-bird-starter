import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {Frame} from "../framework26/Frame";
import {settings} from "../settings";
import {Birdie} from "./Birdie";
import {GameStatus} from "../framework26/GameStatus";
import {ITubesPair} from "./ITubesPair";

export class TubesPair implements IAnimatable {
    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    top: Frame;
    bottom: Frame;
    private x: number;
    private birdie: Birdie;
    private gameStatus: GameStatus;

    constructor(tubePair: ITubesPair) {
        this.sprite = tubePair.sprite;
        this.ctx = tubePair.ctx;
        this.top = new Frame(settings.tubesPair.top);
        this.bottom = new Frame(settings.tubesPair.bottom);
        this.x = this.ctx.canvas.width + settings.tubesPair.top.sw;
        this.birdie = tubePair.birdie;
        this.gameStatus = tubePair.gameStatus;
    }

    animate(): void {
        if (this.gameStatus.hasStarted) {
            this.x--;

            if (this.x < -settings.tubesPair.top.sw) {
                this.x = this.ctx.canvas.width + settings.tubesPair.top.sw
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