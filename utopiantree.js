const assert = require('assert');

function nextHeight(i, prevheight) {
	if (prevheight % 2 === 0) {
		prevheight += 1;
	} else {
		prevheight *= 2;
	}
	return prevheight;
}

function utopianTree(n) {
	let prevHeight = 0;
	let result = [];

	for (let i = 0; i <= n; i++) {
		const actualHeight = nextHeight(i, prevHeight);
		result.push(actualHeight);
		prevHeight = actualHeight;
	}

	return result[result.length - 1];
}

assert.equal(nextHeight(0, 0), 1);
assert.equal(nextHeight(1, 1), 2);
assert.equal(nextHeight(2, 2), 3);
assert.equal(nextHeight(3, 3), 6);
assert.equal(nextHeight(4, 6), 7);
assert.equal(nextHeight(5, 7), 14);

assert.equal(utopianTree(0), 1);
assert.equal(utopianTree(1), 2);
assert.equal(utopianTree(2), 3);
assert.equal(utopianTree(3), 6);
assert.equal(utopianTree(4), 7);
assert.equal(utopianTree(5), 14);

console.log('Ok');
