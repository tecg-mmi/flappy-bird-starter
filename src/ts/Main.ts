import {Loop} from "./framework26/core/Loop";
import {settings} from "./settings";

import {IAnimatable} from "./framework26/interfaces/IAnimatable";
import {Background} from "./animates/Background";
import {Ground} from "./animates/Ground";
import {Birdie} from "./animates/Birdie";
import {GameStatus} from "./framework26/GameStatus";

class Main {
    private readonly loop: Loop;
    private readonly sprite: HTMLImageElement;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly iAnimates: IAnimatable[] = [];
    private readonly birdie: Birdie;
    private readonly gameStatus: GameStatus;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');

        this.loop = new Loop(() => {
            this.animate();
        });

        this.gameStatus = new GameStatus();

        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;

        this.background = new Background(
            this.sprite,
            this.ctx
        );


        this.ground = new Ground(
            this.sprite,
            this.ctx,
        );

        this.birdie = new Birdie(
            this.sprite,
            this.ctx,
            this.gameStatus
        );

        this.iAnimates.push(this.background);
        this.iAnimates.push(this.ground);
        this.iAnimates.push(this.birdie);

        this.sprite.addEventListener('load', () => {
            this.loop.start();
        });

        this.canvas.addEventListener('click', () => {

            if (!this.gameStatus.hasStarted) {
                this.gameStatus.hasStarted = true;
            }

            this.birdie.goUp();
        });
    }

    animate() {
        if (this.gameStatus.gameOver) {
            this.loop.stop();
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.iAnimates.forEach((objToAnimate) => {
            objToAnimate.animate();
        });
    }
}

new Main();