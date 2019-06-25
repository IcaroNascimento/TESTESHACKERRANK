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

module.exports = insertionSort1;
