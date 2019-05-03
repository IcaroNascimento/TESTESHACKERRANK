const assert = require('assert');

function diagonalDifference(inputMatrix) {
	// let totalSum = inputMatrix.reduce(function(sum, value) {
	// 	return sum + value;
	// });

    const leftToRight = inputMatrix[0][0] + inputMatrix[1][1] + inputMatrix[2][2] 
    const rightToLeft = inputMatrix[0][2] + inputMatrix[1][1] + inputMatrix[2][0] 
    return Math.abs(leftToRight-rightToLeft);
}

assert.equal(diagonalDifference([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]), 0);
assert.equal(diagonalDifference([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 9, 8, 9 ],
]), 2);
assert.equal(diagonalDifference([
    [ 11, 2, 4 ],
    [ 4, 5, 6 ],
    [ 10, 8, -12 ],
]), 15);

console.log('ok');

