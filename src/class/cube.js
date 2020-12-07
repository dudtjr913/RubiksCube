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
  static changedCube = null;

  moveUp(side) {
    if (side === cubeSide.UP_LEFT) {
      this.changedCube = pushLeft(this.cube[0]);
    } else {
      this.changedCube = pushRight(this.cube[0]);
    }

    return (this.cube[0] = this.changedCube);
  }

  moveDown(side) {
    if (side === cubeSide.DOWN_LEFT) {
      this.changedCube = pushLeft(this.cube[2]);
    } else {
      this.changedCube = pushRight(this.cube[2]);
    }

    return (this.cube[2] = this.changedCube);
  }

  moveLeft(side) {
    const leftSideCube = [this.cube[0][0], this.cube[1][0], this.cube[2][0]];

    if (side === cubeSide.LEFT_UP) {
      this.changedCube = pushLeft(leftSideCube);
    } else {
      this.changedCube = pushRight(leftSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[0] = this.changedCube[index];
    });
  }

  moveRight(side) {
    const rightSideCube = [this.cube[0][2], this.cube[1][2], this.cube[2][2]];

    if (side === cubeSide.RIGHT_UP) {
      this.changedCube = pushLeft(rightSideCube);
    } else {
      this.changedCube = pushRight(rightSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[2] = this.changedCube[index];
    });
  }
}
