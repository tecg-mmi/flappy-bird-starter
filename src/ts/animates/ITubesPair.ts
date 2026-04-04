import {Birdie} from "./Birdie";
import {GameStatus} from "../framework26/GameStatus";

export interface ITubesPair {
    sprite: HTMLImageElement,
    ctx: CanvasRenderingContext2D,
    birdie: Birdie,
    gameStatus: GameStatus
}