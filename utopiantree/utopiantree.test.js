const utopianTree = require('./utopiantree');
test('when the cycle or period is "0" the tree height is "1" ', () => {
	expect(utopianTree(0)).toEqual(1);
});
test('when the cycle or period is "1" the tree height is "2" ', () => {
	expect(utopianTree(1)).toEqual(2);
});
test('when the cycle or period is "2" the tree height is "3" ', () => {
	expect(utopianTree(2)).toEqual(3);
});
test('when the cycle or period is "3" the tree height is "6" ', () => {
	expect(utopianTree(3)).toEqual(6);
});
test('when the cycle or period is "4" the tree height is "7" ', () => {
	expect(utopianTree(4)).toEqual(7);
});
test('when the cycle or period is "5" the tree height is "14" ', () => {
	expect(utopianTree(5)).toEqual(14);
});
