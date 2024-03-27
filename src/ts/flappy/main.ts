import {IAnimatable} from "./Types/IAnimatable";
import {Background} from "./Drawables/Background";
import {Ground} from "./Drawables/Ground";
import {TubesPairs} from "./Drawables/TubesPairs";
import {Birdie} from "./Drawables/Birdie";
import {IGameStatus} from "./Types/IGameStatus";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const sprite = new Image();
sprite.src = 'src/resources/sprite.png';
const gameStatus: IGameStatus = {isStarted: false, requestAnimationFrameID: 0};
const tubesPairs = new TubesPairs(ctx, canvas, sprite, gameStatus);
const birdie = new Birdie(ctx, canvas, sprite, gameStatus, tubesPairs.tubePairs);

const animatables: IAnimatable[] = [
    new Background(ctx, canvas, sprite),
    new Ground(ctx, canvas, sprite, gameStatus),
    tubesPairs,
    birdie,
];

function animate() {
    gameStatus.requestAnimationFrameID = window.requestAnimationFrame(animate);
    animatables.forEach((iAnimatable: IAnimatable) => {
        iAnimatable.draw();
        iAnimatable.update();
    });
}


sprite.addEventListener('load', () => {
    animate();
    window.addEventListener('keydown', (e) => {
        if (!gameStatus.isStarted) {
            gameStatus.isStarted = true;
        }
        if (e.key === 'ArrowUp') {
            birdie.goUp();
        }
    });
});





