const assert = require('assert');

function camelCase(string) {
	const splitUpercase = string.split(/[ˆA-Z]/g);

	return splitUpercase.length;
}

assert.equal(camelCase('one'), 1);
assert.equal(camelCase('oneTwo'), 2);
assert.equal(camelCase('oneTwoThree'), 3);
assert.equal(camelCase('saveChangesInTheEditor'), 5);

console.log('Ok');
