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

module.exports = compareTheTriplets;
