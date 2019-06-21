function getElementOccurrences(array) {
	let count = 0
	let obj = {}
	for (let i = 0; i < array.length; i++) {
		count += 1
		
	}

	return {3:count}

}
function countElementDuplicated(arrayA, arrayB) {
	let sortedArrayA = arrayA.sort();
	let sortedArrayB = arrayB.sort();
	let arrayElementCounter = [ 0 ];
	let elementCounter = 0;
	let arrayOrderResult = [];
	for (let i = 0; i < sortedArrayA.length; i++) {
		for (let j = 0; j < sortedArrayB.length; j++) {
			if (sortedArrayA[i] !== sortedArrayB[j]) {
				elementCounter += 1;
			}
		}
		if (elementCounter >= arrayElementCounter[i]) {
			arrayElementCounter.push(elementCounter);
			if (elementCounter >= arrayElementCounter[i - 1]) {
				arrayOrderResult.push(sortedArrayA[i]);
			}
		} else {
			arrayElementCounter.unshift(elementCounter);
		}
		elementCounter = 0;
	}

	return arrayOrderResult;
}

function missingNumbers(arrayA, arrayB) {
	return countElementDuplicated(arrayA, arrayB).join(' ');
}

module.exports = { getElementOccurrences };
