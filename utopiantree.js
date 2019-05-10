const assert = require('assert');

function utopianTree(n) {
	let height = 0;
	for (let i = 0; i < n; i++) {
		height = height + (i / 2 !== 0 ? 1 : height);
	}
	return height;
}


assert.equal(utopianTree(0), 1);
assert.equal(utopianTree(1), 2);
assert.equal(utopianTree(2), 3);
assert.equal(utopianTree(3), 6);
assert.equal(utopianTree(4), 7);
assert.equal(utopianTree(5), 14);

console.log('Ok');
