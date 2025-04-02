import {iAnimatable} from "./types/iAnimatable";

export class Animation {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private iAnimatables: iAnimatable[];


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, iAnimatables: iAnimatable[] = []) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.iAnimatables = iAnimatables;
    }

    start() {
        this.animate();
    }

    registerAnimatable(animatable: iAnimatable) {
        this.iAnimatables.push(animatable);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.iAnimatables.forEach((animatable: iAnimatable) => {
            animatable.animate()
        })

        requestAnimationFrame(this.animate.bind(this));
    }
}