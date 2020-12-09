import {FLAT_CUBE, EXTRACT_SIDE} from '../utils.js';

const {U, B, L, F, R, D} = FLAT_CUBE;
const {UP, LEFT, DOWN, RIGHT} = EXTRACT_SIDE;

export default class Cube {
  constructor() {
    this.cube = createCube();
  }
  turnFront(formula) {}

  turnBack(formula) {}

  turnUp(formula) {
    const flatCubes = [this.cube[L], this.cube[F], this.cube[R], this.cube[B]];
    const extractionSides = [UP, UP, UP, UP];
    const sideEntry = extractSide(flatCube, extractionSides);
  }

  turnDown(formula) {}

  turnLeft(formula) {}

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
      const row = extractRow(flatCubes, extractionSides[index]);
      sideEntry.push(row);
    }
  });

  return sideEntry;
};

const extractColumn = (flatCube, extractSide) => {
  const column = [];
  flatCube.forEach((side) => column.push(side[extractSide]));

  return column;
};

const extractRow = (flatCube, extractSide) => {
  const row = flatCube[extractSide];

  return row;
};
