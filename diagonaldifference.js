const assert = require('assert');

function diagonalDifference(inputMatrix) {
	// let leftToRight = inputMatrix[0][0] + inputMatrix[1][1] + inputMatrix[2][2];
	// let rightToLeft = inputMatrix[0][2] + inputMatrix[1][1] + inputMatrix[2][0];

		let leftToRight = 0
		let rightToLeft = 0
	
	for (let row = 0; row < inputMatrix.length; row++) {
		 leftToRight += inputMatrix[row][row];
		 rightToLeft += inputMatrix[row][inputMatrix.length - row - 1];
	}

	return Math.abs(leftToRight - rightToLeft);
}

assert.equal(diagonalDifference([ [ 1, 2, 3 ], 
								  [ 4, 5, 6 ], 
								  [ 7, 8, 9 ] ]), 0);

assert.equal(diagonalDifference([ [ 1, 2, 3 ], 
								  [ 4, 5, 6 ], 
								  [ 9, 8, 9 ] ]), 2);

assert.equal(diagonalDifference([ [ 11, 2, 4 ], 
								  [ 4, 5, 6 ], 
								  [ 10, 8, -12 ] ]), 15);

assert.equal(diagonalDifference([ [ -11, 2, 4 ], 
								  [ 4, -5, 6 ], 
								  [ 10, -8, -12 ] ]), 37);

assert.equal(diagonalDifference([ [ 1, 2, 3, 4 ], 
								  [ 5, 6, 7, 8 ], 
								  [ 9, 10, 11, 12 ], 
								  [ 0, 14, 15, 16 ] ]), 13);

assert.equal(diagonalDifference([ [ 1, 2, 3, 4 ], 
								  [ 5, 6, 7, 8 ], 
								  [ 9, 10, 11, 12 ], 
								  [ 13, 14, 15, 17 ] ]), 1);

console.log('ok');
