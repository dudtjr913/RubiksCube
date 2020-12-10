import {EXTRACT_SIDE} from '../../utils.js';

export default function extractSide(flatCubes, extractionSides) {
  const {LEFT, RIGHT} = EXTRACT_SIDE;
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
}

const extractColumn = (flatCube, extractionSide) => {
  const column = [];
  flatCube.forEach((side) => column.push(side[extractionSide]));

  return column;
};

const extractRow = (flatCube, extractionSide) => {
  const row = flatCube[extractionSide];

  return row;
};
