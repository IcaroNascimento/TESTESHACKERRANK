const assert = require('assert');

function sortArrayA(arrayA) {
	let sortedArray = [ arrayA[0] ];
	for (let i = 0; i < arrayA.length; i++) {
		if (sortedArray.includes(arrayA[i])) {
			sortedArray.sort;
		} else {
			sortedArray.push(arrayA[i]);
			sortedArray.sort;
		}

		console.log(sortedArray);
	}
}

function missingNumbers(){
	
}

assert.deepEqual(
	sortArrayA(
		[ 203, 204, 205, 206, 207, 208, 203, 204, 205, 206 ],
		[ 203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204 ]
	),
	'204 205 206'
);
// assert.deepEqual(missingNumbers([ 1, 2, 3, 4 ], [ 1, 2, 3, 4, 5 ]), '5');
// assert.deepEqual(missingNumbers([ 1, 2, 3, 4 ], [ 1, 2, 3, 4, 5, 6 ]), '5 6');
console.log('ok');
