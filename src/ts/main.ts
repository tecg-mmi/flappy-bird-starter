import {Background} from "./Background";
import {Ground} from "./Ground";
import {IAnimatable} from "./Types/IAnimatable";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const sprite = new Image();
sprite.src = 'src/resources/sprite.png';

const drawables: IAnimatable[] = [new Background(ctx, canvas, sprite), new Ground(ctx, canvas, sprite)];

function animate() {
    drawables.forEach((iAnimatable: IAnimatable) => {
        iAnimatable.draw();
        iAnimatable.update();
    });
    window.requestAnimationFrame(animate);

}

sprite.addEventListener('load', () => {
    animate();
});




