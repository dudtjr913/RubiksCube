import createCube from '../controller/cube/create.js';
import extractSide from '../controller/cube/extract.js';
import changeCube from '../controller/cube/change.js';
import {pushClockWise, pushCounterClockWise} from '../controller/cube/push.js';
import {FLAT_CUBE, EXTRACT_SIDE} from '../utils.js';

const {U, B, L, F, R, D} = FLAT_CUBE;
const {UP, LEFT, DOWN, RIGHT} = EXTRACT_SIDE;

export default class Cube {
  constructor() {
    this.cube = createCube();
    this.count = 0;
  }

  static pushedCube = [];

  turnFront(formula) {
    const flatCubes = [this.cube[U], this.cube[R], this.cube[D], this.cube[L]];
    const extractionSides = [DOWN, LEFT, UP, RIGHT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    if (formula.includes("'")) {
      this.pushedCube = pushCounterClockWise(sideEntry);
    } else {
      this.pushedCube = pushClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, this.pushedCube);
  }

  turnBack(formula) {
    const flatCubes = [this.cube[U], this.cube[R], this.cube[D], this.cube[L]];
    const extractionSides = [UP, RIGHT, DOWN, LEFT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    if (formula.includes("'")) {
      this.pushedCube = pushClockWise(sideEntry);
    } else {
      this.pushedCube = pushCounterClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, this.pushedCube);
  }

  turnUp(formula) {
    const flatCubes = [this.cube[L], this.cube[F], this.cube[R], this.cube[B]];
    const extractionSides = [UP, UP, UP, UP];
    const sideEntry = extractSide(flatCubes, extractionSides);
    if (formula.includes("'")) {
      this.pushedCube = pushClockWise(sideEntry);
    } else {
      this.pushedCube = pushCounterClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, this.pushedCube);
  }

  turnDown(formula) {
    const flatCubes = [this.cube[L], this.cube[F], this.cube[R], this.cube[B]];
    const extractionSides = [DOWN, DOWN, DOWN, DOWN];
    const sideEntry = extractSide(flatCubes, extractionSides);
    if (formula.includes("'")) {
      this.pushedCube = pushCounterClockWise(sideEntry);
    } else {
      this.pushedCube = pushClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, this.pushedCube);
  }

  turnLeft(formula) {
    const flatCubes = [this.cube[U], this.cube[F], this.cube[D], this.cube[B]];
    const extractionSides = [LEFT, LEFT, LEFT, RIGHT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    if (formula.includes("'")) {
      this.pushedCube = pushCounterClockWise(sideEntry);
    } else {
      this.pushedCube = pushClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, this.pushedCube);
  }

  turnRight(formula) {
    const flatCubes = [this.cube[U], this.cube[F], this.cube[D], this.cube[B]];
    const extractionSides = [RIGHT, RIGHT, RIGHT, LEFT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    if (formula.includes("'")) {
      this.pushedCube = pushClockWise(sideEntry);
    } else {
      this.pushedCube = pushCounterClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, this.pushedCube);
  }
}
