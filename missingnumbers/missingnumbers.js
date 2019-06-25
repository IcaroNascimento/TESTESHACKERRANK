function getElementOccurrences(array) {
	let obj = {};
	for (let i = 0; i < array.length; i++) {
		const key = array[i];
		const value = obj[key];
		obj[key] = value ? value + 1 : 1;
	}

	return obj;
}

function missingNumbers(arrayA, arrayB) {
	let occurrencesArrayA = getElementOccurrences(arrayA);
	let occurrencesArrayB = getElementOccurrences(arrayB);
	let entriesA = Object.entries(occurrencesArrayA);
	let entriesB = Object.entries(occurrencesArrayB);
	let result = [];
	for (let i = 0; i < entriesB.length; i++) {
		if (entriesB[i][1] !== entriesA[i][1]) {
			let arraKeyNumber = Number(entriesB[i][0]);
			result.push(arraKeyNumber);
		}
	}

	return result;
}

module.exports = { getElementOccurrences, missingNumbers };
