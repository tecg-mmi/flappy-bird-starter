import {IFrame} from "../framework26/interfaces/IFrame";

export interface IBackground {
    sprite: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    frame: IFrame;
}