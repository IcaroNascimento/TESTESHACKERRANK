const assert = require('assert');

// '2 4 6 8 3'
function imprimeArray(tamanho, arr) {
	let resultado = ''
	for (let i = 0; i < tamanho; i++) {
		resultado += arr[i];
		let posDireita = i + 1
		if (posDireita < tamanho) {
			resultado += ' ';
		}
	}
	return resultado
}

function insertionSort1(tamanho, arr) {
	let posDesornado = tamanho - 1;
	let desordenado = arr[tamanho - 1];
	let resultado = '';

	if (tamanho === 1) {
		return resultado + arr[0];
	}

	for (let i = posDesornado - 1; i >= 0; i--) {
		let posAtual = i;
		let elementoAtual = arr[posAtual];
		let posDireita = posAtual + 1;
		let elementoDireita = arr[posDireita];
		if (elementoAtual > desordenado) {
			arr[posDireita] = elementoAtual;
			resultado += imprimeArray(tamanho, arr) + ' \n';
		}
		if (elementoAtual <= desordenado) {
			arr[posDireita] = desordenado;
			resultado += imprimeArray(tamanho, arr);
			break;
		} else if (posAtual === 0) {
			arr[posAtual] = desordenado;
			resultado += imprimeArray(tamanho, arr);
			break;
		}
	}
	return resultado;
}

assert.deepEqual(insertionSort1(5, [ 2, 4, 6, 8, 3 ]), '2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8');
assert.deepEqual(insertionSort1(5, [ 2, 4, 6, 8, 1 ]), '2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 2 4 6 8 \n1 2 4 6 8');
assert.deepEqual(insertionSort1(5, [ 2, 4, 6, 8, 6 ]), '2 4 6 8 8 \n2 4 6 6 8');
assert.deepEqual(insertionSort1(5, [ 2, 4, 6, 8, 10 ]), '2 4 6 8 10');
assert.deepEqual(insertionSort1(1, [ 1 ]), '1');

console.log('ok');

module.exports = insertionSort1;
