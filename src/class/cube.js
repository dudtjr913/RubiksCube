export default class Cube {
  constructor() {
    this.cube = createCube();
  }

  turnFront() {}

  turnBack() {}

  turnUp() {}

  turnDown() {}

  turnLeft() {}

  turnRight() {}
}

const createCube = () => {
  const color = ['B', 'W', 'O', 'G', 'Y', 'R'];
  const emptyCube = Array(6).fill([]);
  const cube = emptyCube.map((_, index) => createFlatCube(color[index]));
};

const createFlatCube = (color) => {
  const emptyFlatCube = Array(3).fill([]);
  const flatCube = emptyFlatCube.map(() => Array(3).fill(color));

  return flatCube;
};
