const assert = require('assert');

function plusMinus(array) {
	const arrayString = array.toString();
	const countNegative = arrayString.split(/[-]/g).length - 1;
	const countZero = arrayString.split(/[0]/g).length - 1;
	const countPositive = array.length - (countNegative + countZero);

	return `${(countPositive / array.length).toFixed(6)}, ${(countNegative / array.length).toFixed(6)}, ${(countZero /
		array.length).toFixed(6)}`;
}

assert.equal(plusMinus([ 1, 1, 0, -1, -1 ]), '0.400000, 0.400000, 0.200000');
assert.equal(plusMinus([ 1, 2, 3, -1, -2, -3, 0, 0 ]), '0.375000, 0.375000, 0.250000');
assert.equal(plusMinus([ -4, 3, -9, 0, 4, 1 ]), '0.500000, 0.333333, 0.166667');

console.log('Ok');
