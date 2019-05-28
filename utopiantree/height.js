function nextHeight(i, prevheight) {
	if (prevheight % 2 === 0) {
		prevheight += 1;
	} else {
		prevheight *= 2;
	}
	return prevheight;
}

module.exports = nextHeight;
