import {IAnimatable} from "../framework26/interfaces/IAnimatable";
import {Frame} from "../framework26/Frame";
import {settings} from "../settings";
import {Birdie} from "./Birdie";
import {GameStatus} from "../framework26/GameStatus";
import {ITubesPair} from "./ITubesPair";
import {Random} from "../framework26/math/Random";
import {Collision} from "../framework26/math/Collision";

export class TubesPair implements IAnimatable {
    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    top: Frame;
    bottom: Frame;
    private leftX: number;// côté gauche du tube
    // Position Y équidistante de la zone de passage de Birdie entre les deux tuyaux
    private passageCenterY: number;
    // Espace accordé à Birdie pour passer à this.passageCenterY + this.gap
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
        this.leftX = this.ctx.canvas.width + settings.tubesPair.top.sw;
        this.passageCenterY = Random.nextInteger(settings.tubesPair.minMaxY);
        this.top.dy = -(this.top.sh - (this.passageCenterY - this.gap / 2));
        this.bottom.dy = this.passageCenterY + this.gap / 2;
    }

    animate(): void {
        if (this.gameStatus.hasStarted) {
            this.leftX--;
            if (this.leftX < -settings.tubesPair.top.sw) {
                this.initRandomValues()
            }
            this.draw();
            if (this.checkCollisionWithBirdie()) {
                this.gameStatus.gameOver = true;
            }
        }

    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            this.top.sx,
            this.top.sy,
            this.top.sw,
            this.top.sh,
            this.leftX,
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
            this.leftX,
            this.bottom.dy,
            this.bottom.dw,
            this.bottom.dh,
        );
    }

    private checkCollisionWithBirdie() {
        // collision avec le tube et Birdie plus le tube du bas et Birdie
        return Collision.checkRectangleCollision(
                {
                    height: settings.tubesPair.top.sh + this.top.dy, // (this.top.dy est valeur négative d'où le + et sh est la hauteur totale du tube (325)... donc la hauteur totale du tube - le débordement négatif /2)
                    width: settings.tubesPair.top.sw,
                    origin: {
                        x: this.leftX,// puisque le X, c'est le côté gauche des tubes
                        y: (settings.tubesPair.top.sh + this.top.dy) / 2// c'est comme pour la hauteur mais /2
                    },
                },
                {
                    height: settings.birdie.height,
                    width: settings.birdie.width,
                    origin: this.birdie.origin,
                }
            ) ||
            Collision.checkRectangleCollision(
                {
                    height: this.ctx.canvas.height - this.bottom.dy,
                    width: settings.tubesPair.top.sw,
                    origin: {
                        x: this.leftX + settings.tubesPair.top.sw / 2,// puisque le X, c'est le côté gauche des tubes
                        y: this.bottom.dy + settings.tubesPair.top.sh / 2
                    },
                },
                {
                    height: settings.birdie.height,
                    width: settings.birdie.width,
                    origin: this.birdie.origin,
                }
            )
    }
}