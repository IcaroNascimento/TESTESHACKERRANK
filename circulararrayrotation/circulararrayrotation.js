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
