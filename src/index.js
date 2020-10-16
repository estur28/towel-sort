
module.exports = function towelSort (matrix) {
  let mat = [];
  
    if ( !matrix ) {
      return [];
    } else {
    for (let j = 0; j < matrix.length; j++) {
       if  (j % 2 !== 0) {
      mat.push(matrix[j].reverse());
    } else {
      mat.push(matrix[j])
    }
  }
  return mat.flat( Infinity );
}
}