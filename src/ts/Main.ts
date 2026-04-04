import {Loop} from "./framework26/core/Loop";
import {settings} from "./settings";
import {IAnimatable} from "./framework26/interfaces/IAnimatable";
import {Background} from "./animates/Background";
import {Ground} from "./animates/Ground";
import {Birdie} from "./animates/Birdie";
import {GameStatus} from "./framework26/GameStatus";
import {TubesPair} from "./animates/TubesPair";

class Main {
    private readonly loop: Loop;
    private readonly sprite: HTMLImageElement;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly background: Background;
    private readonly ground: Ground;
    private readonly birdie: Birdie;
    private readonly animates: IAnimatable[] = [];
    private readonly gameStatus: GameStatus;
    private readonly tubesPair: TubesPair;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');

        this.loop = new Loop(() => {
            this.animate();
        });

        this.sprite = new Image();
        this.sprite.src = settings.spriteURL;

        this.gameStatus = new GameStatus();


        this.birdie = new Birdie(
            this.sprite,
            this.ctx,
            this.gameStatus
        );

        this.tubesPair = new TubesPair(
            {
                birdie: this.birdie,
                ctx: this.ctx,
                gameStatus: this.gameStatus,
                sprite: this.sprite

            }
        );


        this.background = new Background(
            this.sprite,
            this.ctx,
        );

        this.ground = new Ground(
            this.sprite,
            this.ctx,
        );


        this.animates.push(this.background);
        this.animates.push(this.tubesPair);
        this.animates.push(this.ground);
        this.animates.push(this.birdie);

        this.sprite.addEventListener('load', () => {
            this.loop.start();
        });

        this.canvas.addEventListener('click', () => {
            this.birdie.goUp();
        });


    }

    animate() {
        if (this.gameStatus.gameOver) {
            this.loop.stop();
            return;
        }

        this.animates.forEach((objToAnimate) => {
            objToAnimate.animate();
        });
    }
}

new Main();