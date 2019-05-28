function camelCase(string) {
	return string.split(/[ˆA-Z]/g).length;
}

module.exports = camelCase;
