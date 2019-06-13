const assert = require('assert');

function selecionarResultado(elementos, indices) {
	const resultados = [];
	indices.forEach((index) => {
		resultados.push(elementos[index]);
	});
	return resultados.join(' \n');
}

function transformaIndice(tamanho, rotacoes) {
	const rotacoesLimitadas = rotacoes % tamanho;
	return function(indiceSolicitado) {
		let indiceFinal = indiceSolicitado - rotacoesLimitadas;
		if (indiceFinal < 0)
			indiceFinal = tamanho + indiceFinal;
		return indiceFinal;
	}
}

function circularArrayRotation(elementos, rotacoes, queries) {
	const transformador = transformaIndice(elementos.length, rotacoes);
	const indices = queries.map(transformador);
	return selecionarResultado(elementos, indices);
}

module.exports = circularArrayRotation;

const ABC = 'abc'.split('');
assert.deepEqual(circularArrayRotation(ABC, 0, [ 0 ]), 'a');
assert.deepEqual(circularArrayRotation(ABC, 0, [ 1 ]), 'b');
assert.deepEqual(circularArrayRotation(ABC, 1, [ 1 ]), 'a');
assert.deepEqual(circularArrayRotation(ABC, 1, [ 0 ]), 'c');
assert.deepEqual(circularArrayRotation(ABC, 3, [ 0 ]), 'a');

const ABCDEF = 'abcdef'.split('');
assert.deepEqual(circularArrayRotation(ABCDEF, 1, [ 5 ]), 'e');
assert.deepEqual(circularArrayRotation(ABCDEF, 5, [ 5 ]), 'a');
assert.deepEqual(circularArrayRotation(ABCDEF, 6, [ 5 ]), 'f');
assert.deepEqual(circularArrayRotation(ABCDEF, 12, [ 5 ]), 'f');

console.log('ok');
