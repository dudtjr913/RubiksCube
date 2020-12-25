import {EXTRACT_SIDE} from '../utils.js';

const changeCube = (flatCubes, extractionSides, pushedCube) => {
  const {LEFT, RIGHT} = EXTRACT_SIDE;
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

export default changeCube;
