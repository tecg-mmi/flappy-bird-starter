import {iAnimatable} from "./types/iAnimatable";

export class Animation {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    public iAnimatables: iAnimatable[];
    private requestAnimationFrameID: number;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, iAnimatables: iAnimatable[] = []) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.iAnimatables = iAnimatables;
        console.log(this.iAnimatables);
    }

    start() {
        this.animate();
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameID);
    }

    registerAnimatable(animatable: iAnimatable) {
        this.iAnimatables.push(animatable);
    }

    animate() {
        this.requestAnimationFrameID = requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.iAnimatables.forEach((animatable: iAnimatable) => {
            animatable.animate()
        })

    }
}