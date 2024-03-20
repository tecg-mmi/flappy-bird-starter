import {Background} from "./Background";
import {Ground} from "./Ground";

const canvas = document.getElementById('birdy') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const image = new Image();

image.src = 'src/resources/sprite.png';
const background = new Background(ctx, canvas, image);
const ground = new Ground(ctx, canvas, image);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    ground.draw();
    window.requestAnimationFrame(animate);
    ground.update();
}

image.addEventListener('load', () => {
    background.draw();
    ground.draw();

    window.requestAnimationFrame(() => {
        animate();
    });
});



