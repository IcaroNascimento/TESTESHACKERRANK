const assert = require('assert');

// '2 4 6 8 3'
function imprimeArray(n, arr) {
	let result = ''
	for (let i = 0; i < n; i++) {
		result += arr[i];
		if (i + 1 < n) {
			result += ' ';
		}
	}
	return result
}

function insertionSort1(n, arr) {
	let escolhido = arr[n - 1];
	let result = '';

	for (let i = n - 2 ; i >= 0; i--) {
		if (arr[i] > escolhido) {
			arr[i + 1] = arr[i];
			result += imprimeArray(n, arr) + ' \n';
		} else {
			arr[i + 1] = escolhido;
			result += imprimeArray(n, arr);
		}
	}
	return result
}
assert.deepEqual(insertionSort1(5, [ 2, 4, 6, 8, 3 ]), '2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8');
// assert.deepEqual(insertionSort1(5, [ 2, 6, 4, 8, 3 ]), [ 2, 3, 4, 6, 8 ]);

console.log('ok');

module.exports = insertionSort1;
