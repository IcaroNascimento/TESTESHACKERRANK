const camelCase = require('./camelcase');

test('return "1" when has encountered "one" word with camelCase validation', () => {
	expect(camelCase('one')).toEqual(1);
});
test('return "2" when has encountered "two" words with camelCase validation', () => {
	expect(camelCase('oneTwo')).toEqual(2);
});
test('return "3" when has encountered "three" words with camelCase validation', () => {
	expect(camelCase('oneTwoThree')).toEqual(3);
});
test('return "5" when has encountered "five" words with camelCase validation', () => {
	expect(camelCase('saveChangesInTheEditor')).toEqual(5);
});
