const assert = require('assert');

function height(i, prevheight) {
	prevheight % 2 === 0 ? (prevheight += 1) : (prevheight *= 2);
	return prevheight;
}

function utopianTree(n) {
	let prevHeight = 0;
	let result = [];

	for (let i = 0; i <= n; i++) {
		const actualHeight = height(i, prevHeight);
		result.push(actualHeight);
		prevHeight = actualHeight;
	}

	return result[result.length - 1];
}

assert.equal(height(0, 0), 1);
assert.equal(height(1, 1), 2);
assert.equal(height(2, 2), 3);
assert.equal(height(3, 3), 6);
assert.equal(height(4, 6), 7);
assert.equal(height(5, 7), 14);

assert.equal(utopianTree(0), 1);
assert.equal(utopianTree(1), 2);
assert.equal(utopianTree(2), 3);
assert.equal(utopianTree(3), 6);
assert.equal(utopianTree(4), 7);
assert.equal(utopianTree(5), 14);

console.log('Ok');
