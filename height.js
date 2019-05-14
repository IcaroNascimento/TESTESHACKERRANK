const assert = require('assert');

function nextHeight(i, prevheight) {
	if (prevheight % 2 === 0) {
		prevheight += 1;
	} else {
		prevheight *= 2;
	}
	return prevheight;
}

assert.equal(nextHeight(0, 0), 1);
assert.equal(nextHeight(1, 1), 2);
assert.equal(nextHeight(2, 2), 3);
assert.equal(nextHeight(3, 3), 6);
assert.equal(nextHeight(4, 6), 7);
assert.equal(nextHeight(5, 7), 14);

console.log('Ok');

module.exports = nextHeight;
