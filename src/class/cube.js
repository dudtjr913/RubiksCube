import {FLAT_CUBE, EXTRACT_SIDE} from '../utils.js';
import createCube from '../controller/cube/create.js';
import extractSide from '../controller/cube/extract.js';
import {pushClockWise, pushCounterClockWise} from '../controller/cube/push.js';

const {U, B, L, F, R, D} = FLAT_CUBE;
const {UP, LEFT, DOWN, RIGHT} = EXTRACT_SIDE;

export default class Cube {
  constructor() {
    this.cube = createCube();
    this.count = 0;
  }

  turnFront(formula) {
    const flatCubes = [this.cube[U], this.cube[R], this.cube[D], this.cube[L]];
    const extractionSides = [DOWN, LEFT, UP, RIGHT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    let pushedCube = [];
    if (formula.includes("'")) {
      pushedCube = pushCounterClockWise(sideEntry);
    } else {
      pushedCube = pushClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, pushedCube);
  }

  turnBack(formula) {
    const flatCubes = [this.cube[U], this.cube[R], this.cube[D], this.cube[L]];
    const extractionSides = [UP, RIGHT, DOWN, LEFT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    let pushedCube = [];
    if (formula.includes("'")) {
      pushedCube = pushClockWise(sideEntry);
    } else {
      pushedCube = pushCounterClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, pushedCube);
  }

  turnUp(formula) {
    const flatCubes = [this.cube[L], this.cube[F], this.cube[R], this.cube[B]];
    const extractionSides = [UP, UP, UP, UP];
    const sideEntry = extractSide(flatCubes, extractionSides);
    let pushedCube = [];
    if (formula.includes("'")) {
      pushedCube = pushClockWise(sideEntry);
    } else {
      pushedCube = pushCounterClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, pushedCube);
  }

  turnDown(formula) {
    const flatCubes = [this.cube[L], this.cube[F], this.cube[R], this.cube[B]];
    const extractionSides = [DOWN, DOWN, DOWN, DOWN];
    const sideEntry = extractSide(flatCubes, extractionSides);
    let pushedCube = [];
    if (formula.includes("'")) {
      pushedCube = pushCounterClockWise(sideEntry);
    } else {
      pushedCube = pushClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, pushedCube);
  }

  turnLeft(formula) {
    const flatCubes = [this.cube[U], this.cube[F], this.cube[D], this.cube[B]];
    const extractionSides = [LEFT, LEFT, LEFT, RIGHT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    let pushedCube = [];
    if (formula.includes("'")) {
      pushedCube = pushCounterClockWise(sideEntry);
    } else {
      pushedCube = pushClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, pushedCube);
  }

  turnRight(formula) {
    const flatCubes = [this.cube[U], this.cube[F], this.cube[D], this.cube[B]];
    const extractionSides = [RIGHT, RIGHT, RIGHT, LEFT];
    const sideEntry = extractSide(flatCubes, extractionSides);
    let pushedCube = [];
    if (formula.includes("'")) {
      pushedCube = pushClockWise(sideEntry);
    } else {
      pushedCube = pushCounterClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, pushedCube);
  }
}

const changeCube = (flatCubes, extractionSides, pushedCube) => {
  flatCubes.forEach((flatCube, index) => {
    if (extractionSides[index] === LEFT || extractionSides[index] === RIGHT) {
      changeCubeColumn(flatCube, extractionSides[index] - 1, pushedCube[index]);
    } else {
      changeCubeRow(flatCube, extractionSides[index], pushedCube[index]);
    }
  });
};

const changeCubeColumn = (flatCube, extractionSide, pushedSide) => {
  return flatCube.forEach(
    (side, index) => (side[extractionSide] = pushedSide[index]),
  );
};

const changeCubeRow = (flatCube, extractionSide, pushedSide) => {
  return (flatCube[extractionSide] = pushedSide);
};
