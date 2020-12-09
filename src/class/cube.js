export default class Cube {
  constructor() {
    this.cube = createCube();
  }

  turnFront(formula) {}

  turnBack(formula) {}

  turnUp(formula) {}

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
