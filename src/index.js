module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  const newMatrix = matrix.map(elem => matrix.indexOf(elem)%2 ? elem.reverse(): elem); 
  return newMatrix.flat();
}