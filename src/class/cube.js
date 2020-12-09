import {FLAT_CUBE, EXTRACT_SIDE} from '../utils.js';

const {U, B, L, F, R, D} = FLAT_CUBE;
const {UP, LEFT, DOWN, RIGHT} = EXTRACT_SIDE;

export default class Cube {
  constructor() {
    this.cube = createCube();
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
      pushedCube = pushCounterClockWise(sideEntry);
    } else {
      pushedCube = pushClockWise(sideEntry);
    }
    changeCube(flatCubes, extractionSides, pushedCube);
  }

  turnUp(formula) {
    const flatCubes = [this.cube[L], this.cube[F], this.cube[R], this.cube[B]];
    const extractionSides = [UP, UP, UP, UP];
    const sideEntry = extractSide(flatCubes, extractionSides);
    let pushedCube = [];
    if (formula.includes("'")) {
      pushedCube = pushCounterClockWise(sideEntry);
    } else {
      pushedCube = pushClockWise(sideEntry);
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

  turnRight(formula) {}
}

const createCube = () => {
  const color = ['B', 'W', 'O', 'G', 'Y', 'R'];
  const emptyCube = Array(6).fill([]);
  const cube = emptyCube.map((_, index) => createFlatCube(color[index]));

  return cube;
};

const createFlatCube = (color) => {
  const emptyFlatCube = Array(3).fill([]);
  const flatCube = emptyFlatCube.map(() => Array(3).fill(color));

  return flatCube;
};

const extractSide = (flatCubes, extractionSides) => {
  const sideEntry = [];
  flatCubes.forEach((flatCube, index) => {
    if (extractionSides[index] === LEFT || extractionSides[index] === RIGHT) {
      const column = extractColumn(flatCube, extractionSides[index] - 1);
      sideEntry.push(column);
    } else {
      const row = extractRow(flatCube, extractionSides[index]);
      sideEntry.push(row);
    }
  });

  return sideEntry;
};

const extractColumn = (flatCube, extractionSide) => {
  const column = [];
  flatCube.forEach((side) => column.push(side[extractionSide]));

  return column;
};

const extractRow = (flatCube, extractionSide) => {
  const row = flatCube[extractionSide];

  return row;
};

const pushClockWise = (sideEntry) => {
  const copySideEntry = [...sideEntry];
  const pushedSide = copySideEntry.shift();
  const result = [...copySideEntry, pushedSide];

  return result;
};

const pushCounterClockWise = (sideEntry) => {
  const copySideEntry = [...sideEntry];
  const pushedSide = copySideEntry.pop();
  const result = [pushedSide, ...copySideEntry];

  return result;
};

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
