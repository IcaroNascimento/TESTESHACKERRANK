function compareTriplets(a, b) {
	let countAlice = 0;
	let countBob = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			countAlice += 1;
		} else if (a[i] < b[i]) {
			countBob += 1;
		}
	}
	return [ countAlice, countBob ];
}

module.exports = compareTriplets;
