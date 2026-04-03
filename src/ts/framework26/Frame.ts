import {IFrame} from "./interfaces/IFrame";

export class Frame implements IFrame {
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    dx: number;
    dy: number;
    dw: number;
    dh: number;

    constructor(frame: IFrame) {
        this.sx = frame.sx;
        this.sy = frame.sy;
        this.sw = frame.sw;
        this.sh = frame.sh;
        this.dx = frame.dx;
        this.dy = frame.dy;
        this.dw = frame.dw;
        this.dh = frame.dh;
    }
}