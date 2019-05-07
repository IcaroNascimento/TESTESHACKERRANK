const assert = require('assert');

function miniMaxSum(arr) {
	const arraySort = arr.sort((a, b) => a - b);    
     
    const sum  = (sum,value) => sum + value;

    const maxSum = arraySort.slice(1, arr.length).reduce(sum);
    const minSum = arraySort.slice(0, arr.length - 1).reduce(sum);

	return `${minSum} ${maxSum}`;
}

assert.equal(miniMaxSum([ 1, 3, 5, 7, 9 ]), '16 24');
assert.equal(miniMaxSum([ 7, 69, 2, 221, 8974 ]), '299 9271');
assert.equal(miniMaxSum([ 1, 3, 5, 9, 7 ]), '16 24');
assert.equal(miniMaxSum([ 1, 100, 5, 9, 7 ]), '22 121');

console.log('Ok');
