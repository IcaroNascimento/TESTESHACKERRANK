function missingNumbers(arrayA, arrayB) {
	let result = [];
	let j = 0;
	for (let i = 0; i < arrayA.length; i++) {
		while (arrayA[i] !== arrayB[j]) {
			if (!result.includes(arrayB[j])) {
				result.push(arrayB[j]);
			}
			j += 1;
		}
		j += 1;

		if (arrayB.length - 1 === j) {
			if (arrayA[i] !== arrayB[j]){
			result.push(arrayB[j]);
			};
			
		}
		if (result[result.length - 1] < result[result.length - 2]) {
			auxiliar = result[result.length - 1];
			result[result.length - 1] = result[result.length - 2];
			result[result.length - 2] = auxiliar;
		}
	}

	return result;
}

module.exports = { missingNumbers };
