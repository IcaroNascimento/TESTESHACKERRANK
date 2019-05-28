function plusMinus(arr) {
	let countPositive = (countNegative = countZero = 0);

	arr.forEach((element) => {
		element > 0 ? (countPositive += 1) : element < 0 ? (countNegative += 1) : (countZero += 1);
	});
	return [ countPositive, countNegative, countZero ].map((element) => (element / arr.length).toFixed(6)).join(', ');
}

module.exports = plusMinus;
