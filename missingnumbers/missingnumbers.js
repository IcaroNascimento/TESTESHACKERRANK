const assert = require('assert');

function sortArray(array) {
	let sortedArray = [];
	for (let i = 0; i < array.length; i++) {
		if (sortedArray.includes(array[i])) {
			if (sortedArray[i] > array[i]) {
				sortedArray.push(sortedArray[i]);
			}
		} else {
			sortedArray.push(array[i]);
		}
	}
	return sortedArray;
}

function countElementDuplicated(arrayA, arrayB) {
	let sortedArrayA = sortArray(arrayA);
	let sortedArrayB = sortArray(arrayB);
	let arrayElementCounter = [ 0 ];
	let elementCounter = 0;
	let arrayOrderResult = [];
	for (let i = 0; i < sortedArrayA.length; i++) {
		for (let j = 0; j < sortedArrayB.length; j++) {
			if (sortedArrayA[i] !== sortedArrayB[j]) {
				// 		elementCounter += 1;
				// 	}
				// }
				// if (elementCounter >= arrayElementCounter[i]) {
				// 	arrayElementCounter.push(elementCounter);
				// 	if (elementCounter >= arrayElementCounter[i-1]) {
				arrayOrderResult.push(sortedArrayA[i]);
			}
			// } else {
			// 	arrayElementCounter.unshift(elementCounter);
			// }
			// elementCounter = 0;
		}

		let result = arrayOrderResult.join(' ');

		console.log(arrayElementCounter);
		// console.log(arrayOrderResult);
		console.log(result);

		return result;
	}
}

function missingNumbers(arrayA, arrayB) {
	sortArray(arrayA);

	return countElementDuplicated(arrayA, arrayB);
}

assert.deepEqual(
	missingNumbers(
		[ 203, 204, 205, 206, 207, 208, 203, 204, 205, 206 ],
		[ 203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204 ]
	),
	'204 205 206'
);
// assert.deepEqual(missingNumbers([ 7, 2, 5, 3, 5, 3 ], [ 7, 2, 5, 4, 6, 3, 5, 3 ]), '4 6'
console.log('ok');
