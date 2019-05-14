const assert = require('assert');

function utopianTree(n) {
	let height = 1;

	for (let i = 1; i <= n; i++)
		height += (height % 2 ? height : 1);

	return height;
}

assert.equal(utopianTree(0), 1);
assert.equal(utopianTree(1), 2);
assert.equal(utopianTree(2), 3);
assert.equal(utopianTree(3), 6);
assert.equal(utopianTree(4), 7);
assert.equal(utopianTree(5), 14);

console.log('Ok');
