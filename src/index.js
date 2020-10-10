
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];
    if (!matrix) {
        return newArr;
    } else {
        for (let i = 0; i < matrix.length; i++) {
        
            if (i % 2 != 0) {
                newArr = newArr.concat( matrix[i].reverse() )
            } else {
                newArr = newArr.concat( matrix[i] )
            }
        }
    }
  return newArr;
}
