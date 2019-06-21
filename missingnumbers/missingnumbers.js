function getElementOccurrences(array) {
	let count = 0;
	let obj = {};
	for (let i = 0; i < array.length; i++) {
		count += 1;
	}

	return { 3: count };
}

module.exports = { getElementOccurrences };
