import {pushLeft, pushRight} from '../cube-push.js';
import {CUBE_SIDE, CUBE_SHAPE, UP, LEFT, RIGHT, DOWN} from '../utils.js';

export default class Cube {
  constructor() {
    this.cube = CUBE_SHAPE;
  }
  static changedCube = null;

  moveUp(side) {
    if (side === CUBE_SIDE.UP_LEFT) {
      this.changedCube = pushLeft(this.cube[UP]);
    } else {
      this.changedCube = pushRight(this.cube[UP]);
    }

    return (this.cube[UP] = this.changedCube);
  }

  moveDown(side) {
    if (side === CUBE_SIDE.DOWN_LEFT) {
      this.changedCube = pushLeft(this.cube[DOWN]);
    } else {
      this.changedCube = pushRight(this.cube[DOWN]);
    }

    return (this.cube[DOWN] = this.changedCube);
  }

  moveLeft(side) {
    const leftSideCube = this.cube.map((side) => side[LEFT]);
    if (side === CUBE_SIDE.LEFT_UP) {
      this.changedCube = pushLeft(leftSideCube);
    } else {
      this.changedCube = pushRight(leftSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[LEFT] = this.changedCube[index];
    });
  }

  moveRight(side) {
    const rightSideCube = this.cube.map((side) => side[RIGHT]);
    if (side === CUBE_SIDE.RIGHT_UP) {
      this.changedCube = pushLeft(rightSideCube);
    } else {
      this.changedCube = pushRight(rightSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[RIGHT] = this.changedCube[index];
    });
  }
}
