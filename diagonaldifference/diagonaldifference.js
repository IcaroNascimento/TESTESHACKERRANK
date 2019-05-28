function diagonalDifference(inputMatrix) {
	let leftToRight = 0;
	let rightToLeft = 0;

	for (let row = 0; row < inputMatrix.length; row++) {
		leftToRight += inputMatrix[row][row];
		rightToLeft += inputMatrix[row][inputMatrix.length - row - 1];
	}

	return Math.abs(leftToRight - rightToLeft);
}

module.exports = diagonalDifference;
