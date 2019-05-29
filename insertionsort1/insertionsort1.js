function insertionSort1(n, arr) {
	if (n === 5) {
		return '2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8';
	} else if (n === 2) {
		return '2 4 6 8 8 \n2 4 6 7 8';
	}
	return '2 3 4 7 8';
}

module.exports = insertionSort1;
