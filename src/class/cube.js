import {pushLeft, pushRight} from '../cube-push.js';
import {cubeSide} from '../utils.js';

export default class Cube {
  constructor() {
    this.cube = [
      ['R', 'R', 'W'],
      ['G', 'C', 'W'],
      ['G', 'B', 'B'],
    ];
  }

  moveUp(side) {
    let changedCube = null;
    if (side === cubeSide.UP_LEFT) {
      changedCube = pushLeft(this.cube[0]);
    } else {
      changedCube = pushRight(this.cube[0]);
    }

    return (this.cube[0] = changedCube);
  }

  moveDown(side) {
    let changedCube = null;
    if (side === cubeSide.DOWN_LEFT) {
      changedCube = pushLeft(this.cube[2]);
    } else {
      changedCube = pushRight(this.cube[2]);
    }

    return (this.cube[2] = changedCube);
  }

  moveLeft(side) {
    const leftSideCube = [this.cube[0][0], this.cube[1][0], this.cube[2][0]];
    let changedCube = null;
    if (side === cubeSide.LEFT_UP) {
      changedCube = pushLeft(leftSideCube);
    } else {
      changedCube = pushRight(leftSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[0] = changedCube[index];
    });
  }

  moveRight(side) {
    const rightSideCube = [this.cube[0][2], this.cube[1][2], this.cube[2][2]];
    let changedCube = null;
    if (side === cubeSide.RIGHT_UP) {
      changedCube = pushLeft(rightSideCube);
    } else {
      changedCube = pushRight(rightSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[2] = changedCube[index];
    });
  }
}
