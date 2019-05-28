const plusMinus = require('./plusminus');

test('when the sequence is "1, 1, 0, -1, -1", the decimal count of positive numbers is "0.400000", negative numbers is "0.400000" and the zero appearences is "0.200000"  ', () => {
	expect(plusMinus([ 1, 1, 0, -1, -1 ])).toEqual('0.400000, 0.400000, 0.200000');
});
test('when the sequence is "-4, 3, -9, 0, 4, 1", the decimal count of positive numbers is "0.500000", negative numbers is "0.333333" and the zero appearences is "0.166667"  ', () => {
	expect(plusMinus([ -4, 3, -9, 0, 4, 1 ])).toEqual('0.500000, 0.333333, 0.166667');
});
test('when the sequence is "1, 2, 3, -1, -2, -3, 0, 0", the decimal count of positive numbers is "0.375000", negative numbers is "0.375000" and the zero appearences is "0.250000"  ', () => {
	expect(plusMinus([ 1, 2, 3, -1, -2, -3, 0, 0 ])).toEqual('0.375000, 0.375000, 0.250000');
});
test('when the sequence is "55,48,48,45,91,97,45,1,39,54,36,6,19,35,66,36,72,93,38,21,65,70,36,63,39,76,82,26,67,29,24,82,62,53,1,50,47,65,67,19,66,90,77", the decimal count of positive numbers is "1.00000", negative numbers is "0.000000" and the zero appearences is "0.000000"  ', () => {
	expect(plusMinus([ 55, 48, 48, 45, 91, 97, 45, 1, 39, 54, 36, 6, 19, 35, 66, 36, 72, 93, 38, 21, 65, 70, 36, 63, 39, 76, 82, 26, 67, 29, 24, 82, 62, 53, 1, 50, 47, 65, 67, 19, 66, 90, 77])).toEqual('1.000000, 0.000000, 0.000000');
});
