const miniMaxSum = require('./miniMaxSum');

test('when the sequence is "1, 3, 5, 7, 9", the min sum is "16" and the max sum is "24" ', () => {
	expect(miniMaxSum([ 1, 3, 5, 7, 9 ])).toEqual('16 24');
});
test('when the sequence is "7, 69, 2, 221, 8974", the min sum is "299" and the max sum is "9271" ', () => {
	expect(miniMaxSum([ 7, 69, 2, 221, 8974 ])).toEqual('299 9271');
});
test('when the sequence is "1, 3, 5, 9, 7", the min sum is "16" and the max sum is "24" ', () => {
	expect(miniMaxSum([ 1, 3, 5, 9, 7 ])).toEqual('16 24');
});
test('when the sequence is "1, 100, 5, 9, 7", the min sum is "22" and the max sum is "121" ', () => {
	expect(miniMaxSum([ 1, 100, 5, 9, 7 ])).toEqual('22 121');
});
