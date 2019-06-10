const assert = require('assert');


function circularArrayRotation(a, k, queries) {
	// quantidade de k(rotações)
	while (k--) {
		a.unshift(a.pop());
	}
	const result = []
	queries.forEach(index => {
		result.push(a[index])
	});
	return result.join(' \n');
}

module.exports = circularArrayRotation;

assert.deepEqual(circularArrayRotation([ 1, 2, 3 ], 2, [ 0, 1, 2 ]), '2 \n3 \n1');

console.log('ok');
