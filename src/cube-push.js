export const pushLeft = (cubeOneSide) => {
  const copyCube = [...cubeOneSide];
  const pushedCube = copyCube.shift();
  const resultCube = [...copyCube, ...pushedCube];

  return resultCube;
};

export const pushRight = (cubeOneSide) => {
  const copyCube = [...cubeOneSide];
  const pushedCube = copyCube.pop();
  const resultCube = [...pushedCube, ...copyCube];

  return resultCube;
};
