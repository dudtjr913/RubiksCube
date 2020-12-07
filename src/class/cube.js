import {pushLeft, pushRight} from '../cube-push.js';

export default class Cube {
  constructor() {
    this.cube = [
      ['R', 'R', 'W'],
      ['G', 'C', 'W'],
      ['G', 'B', 'B'],
    ];
  }

  moveUp(position) {
    let changedCube = null;
    if (position === 'U') {
      changedCube = pushLeft(this.cube[0]);
    } else {
      changedCube = pushRight(this.cube[0]);
    }

    return (this.cube[0] = changedCube);
  }

  moveDown(position) {
    let changedCube = null;
    if (position === 'B') {
      changedCube = pushRight(this.cube[2]);
    } else {
      changedCube = pushLeft(this.cube[2]);
    }

    return (this.cube[2] = changedCube);
  }

  moveLeft(position) {
    const leftSideCube = [this.cube[0][0], this.cube[1][0], this.cube[2][0]];
    let changedCube = null;
    if (position === 'L') {
      changedCube = pushRight(leftSideCube);
    }
    if (position === "L'") {
      changedCube = pushLeft(leftSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[0] = changedCube[index];
    });
  }

  moveRight(position) {
    const rightSideCube = [this.cube[0][2], this.cube[1][2], this.cube[2][2]];
    let changedCube = null;
    if (position === 'R') {
      changedCube = pushLeft(rightSideCube);
    }
    if (position === "R'") {
      changedCube = pushRight(rightSideCube);
    }

    return this.cube.forEach((cube, index) => {
      cube[2] = changedCube[index];
    });
  }
}
