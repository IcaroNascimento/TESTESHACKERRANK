const assert = require('assert');

function compareTriplets(a, b) {
	let countAlice = 0;
	let countBob = 0;

	for (let i = 0; i <= a.length; i++) {
		if (a[i] > b[i]) {
			countAlice += 1;
		} else if (a[i] < b[i]) {
			countBob += 1;
		}
	}
	return [ countAlice, countBob ];
}
assert.deepEqual(compareTriplets([ 5, 6, 7 ], [ 3, 6, 10 ]), [ 1, 1 ]);
assert.deepEqual(compareTriplets([ 1, 2, 3 ], [ 3, 2, 1 ]), [ 1, 1 ]);
assert.deepEqual(compareTriplets([ 5, 7, 7 ], [ 3, 6, 10 ]), [ 2, 1 ]);
assert.deepEqual(compareTriplets([ 5, 7, 13 ], [ 3, 6, 10 ]), [ 3, 0 ]);

console.log('Ok');
