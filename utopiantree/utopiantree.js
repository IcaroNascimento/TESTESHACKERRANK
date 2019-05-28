function utopianTree(n) {
	let height = 1;

	for (let i = 1; i <= n; i++) height += height % 2 ? height : 1;

	return height;
}

module.exports = utopianTree;
