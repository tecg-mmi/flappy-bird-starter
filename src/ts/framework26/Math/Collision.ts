import {IOrigin} from "../interfaces/IOrigin";

interface IRectangle {
    width: number,
    height: number,
    origin: IOrigin
}

export class Collision {
    static checkCollision(aTopX: number, aTopY: number, aBottomX: number, aBottomY: number,
                          bTopX: number, bTopY: number, bBottomX: number, bBottomY: number,): boolean {
        return !(
            aBottomX < bTopX ||
            aBottomY < bTopY ||
            aTopX > bBottomX ||
            aTopY > bBottomY);
    }
static checkRectangleCollision(a: IRectangle, b: IRectangle): boolean {
    const aHalfWidth = a.width / 2;
    const aHalfHeight = a.height / 2;
    const bHalfWidth = b.width / 2;
    const bHalfHeight = b.height / 2;

    return !(
        a.origin.x + aHalfWidth < b.origin.x - bHalfWidth ||
        a.origin.y + aHalfHeight < b.origin.y - bHalfHeight ||
        a.origin.x - aHalfWidth > b.origin.x + bHalfWidth ||
        a.origin.y - aHalfHeight > b.origin.y + bHalfHeight
    );
}

    static replaceOutOfBounds(rectangle: IRectangle, canvas: HTMLCanvasElement) {
        if (rectangle.origin.y > canvas.height + rectangle.height) {
            rectangle.origin.y = -rectangle.height;
        }
        if (rectangle.origin.y < -rectangle.height) {
            rectangle.origin.y = canvas.height + rectangle.height;
        }
        if (rectangle.origin.x > canvas.width + rectangle.width) {
            rectangle.origin.x = -rectangle.width;
        }
        if (rectangle.origin.x < -rectangle.width) {
            rectangle.origin.x = canvas.width + rectangle.width;
        }
    }

    static transformPoint(point: IOrigin, position: IOrigin, orientation: number): IOrigin {
        const cosTheta = Math.cos(orientation);
        const sinTheta = Math.sin(orientation);
        const rotatedX = point.x * cosTheta - point.y * sinTheta;
        const rotatedY = point.x * sinTheta + point.y * cosTheta;
        return {x: position.x + rotatedX, y: position.y + rotatedY};
    }

    static isPointInCircle(positionA: IOrigin, positionB: IOrigin, radius: number): boolean {
        return Math.sqrt(Math.pow(positionA.x - positionB.x, 2) + Math.pow(positionA.y - positionB.y, 2)) < radius;
    }

    static isPointInRotatedRectangle(width: number, height: number, originRectangle: IOrigin, rotation: number, click: IOrigin
    ): boolean {
        // 1. Translation du point pour que le centre du rectangle soit à (0,0)
        const translatedX = click.x - originRectangle.x;
        const translatedY = click.y - originRectangle.y;

        // 2. Rotation inverse du point (pour ramener le rectangle à un alignement axial)
        const cos = Math.cos(-rotation); // Rotation inverse
        const sin = Math.sin(-rotation);

        const rotatedX = translatedX * cos - translatedY * sin;
        const rotatedY = translatedX * sin + translatedY * cos;

        // 3. Vérification des limites du rectangle non tourné
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        return (
            Math.abs(rotatedX) <= halfWidth &&
            Math.abs(rotatedY) <= halfHeight
        );
    }

}
