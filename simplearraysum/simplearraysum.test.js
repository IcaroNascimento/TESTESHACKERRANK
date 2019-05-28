const simpleArraySum = require('./simplearraysum');
test('when the sequence is "1,2,3", the result is "6" ', () => {
	expect(simpleArraySum([1, 2, 3])).toEqual(6);
});
test('when the sequence is "1, 2, 3, 4, 10, 11", the result is "31" ', () => {
	expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toEqual(31);
});
test('when the sequence is "11, -20, 30, 4, 1, 110", the result is "136" ', () => {
	expect(simpleArraySum([11, -20, 30, 4, 1, 110])).toEqual(136);
});
test('when the sequence is "11, -20, 30, 4, 1, -110", the result is "-84" ', () => {
	expect(simpleArraySum([11, -20, 30, 4, 1, -110])).toEqual(-84);
});