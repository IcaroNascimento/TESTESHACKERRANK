const assert = require('assert');

function insertionSort1(n, arr) {
let escolhido =0

	for ( i = 1; i < arr.length; i++) {
		 escolhido = arr[i];
		 j = i - 1;
		
		while ((j >= 0) && (arr[j] > escolhido)) {
			arr[j + 1] = arr[j];
			j--;
		}
		
		arr[j + 1] = escolhido;
	}


	return arr;
}

assert.deepEqual(insertionSort1(5, [ 2, 4, 6, 8, 3 ]), [ 2, 3, 4, 6, 8 ]);
assert.deepEqual(insertionSort1(5, [ 2, 6, 4, 8, 3 ]), [ 2, 3, 4, 6, 8 ]);



console.log('ok');

module.exports = insertionSort1;
