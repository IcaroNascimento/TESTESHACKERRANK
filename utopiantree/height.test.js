const nextHeight = require('./height');
test('when the cycle or period is "0", counter is "0" and tree height is "1" ', () => {
	expect(nextHeight(0, 0)).toEqual(1);
});
test('when the cycle or period is "1", counter is "1" and tree height is "2" ', () => {
	expect(nextHeight(1, 1)).toEqual(2);
});
test('when the cycle or period is "2", counter is "2" and tree height is "3" ', () => {
	expect(nextHeight(2, 2)).toEqual(3);
});
test('when the cycle or period is "3", counter is "3" and tree height is "6" ', () => {
	expect(nextHeight(3, 3)).toEqual(6);
});
test('when the cycle or period is "4", counter is "6" and tree height is "7" ', () => {
	expect(nextHeight(4, 6)).toEqual(7);
});
test('when the cycle or period is "5", counter is "7" and tree height is "14" ', () => {
	expect(nextHeight(5, 7)).toEqual(14);
});
