export const pushClockWise = (sideEntry) => {
  const copySideEntry = [...sideEntry];
  const pushedSide = copySideEntry.pop();
  const result = [pushedSide, ...copySideEntry];

  return result;
};

export const pushCounterClockWise = (sideEntry) => {
  const copySideEntry = [...sideEntry];
  const pushedSide = copySideEntry.shift();
  const result = [...copySideEntry, pushedSide];

  return result;
};
