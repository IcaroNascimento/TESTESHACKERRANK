function miniMaxSum(arr) {
	const arraySort = arr.sort((a, b) => a - b);

	const sum = (sum, value) => sum + value;

	const maxSum = arraySort.slice(1, arr.length).reduce(sum);
	const minSum = arraySort.slice(0, arr.length - 1).reduce(sum);

	return `${minSum} ${maxSum}`;
}

module.exports = miniMaxSum;
