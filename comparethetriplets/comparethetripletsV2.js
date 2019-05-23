const assert = require('assert');

function compareTheTriplets(arr) {
	let countAlice = 0;
	let countBob = 0;
	let arrayAliceNum = arr[[ 0 ]].slice(0, 3);
	let arrayBobNum = arr[[ 1 ]].slice(0, 3);
	for (let i = 0; i <= arr.length; i++) {
		if (arrayAliceNum[i] > arrayBobNum[i]) {
			countAlice += 1;
		} else if (arrayAliceNum[i] < arrayBobNum[i]) {
			countBob += 1;
		}
	}

	return [ countAlice, countBob ];
}

assert.deepEqual(compareTheTriplets([ [ 1, 2, 3 ], [ 3, 2, 1 ] ]), [ 1, 1 ]);
assert.deepEqual(compareTheTriplets([ [ 5, 7, 7 ], [ 3, 6, 10 ] ]), [ 2, 1 ]);
assert.deepEqual(compareTheTriplets([ [ 5, 7, 13 ], [ 3, 6, 10 ] ]), [ 3, 0 ]);
assert.deepEqual(compareTheTriplets([ [ 5, 6, 7 ], [ 3, 6, 10 ] ]), [ 1, 1 ]);

console.log('Ok');
