const getElementOccurrences = require('./missingnumbers').getElementOccurrences;
const missingNumbers = require('./missingnumbers').missingNumbers;

// test('getElementOccurrences should transform an array into an object with element ocurrences ', () => {
// 	expect(getElementOccurrences([ 3 ])).toStrictEqual({ 3: 1 });
// 	expect(getElementOccurrences([ 3, 3 ])).toStrictEqual({ 3: 2 });
// 	expect(getElementOccurrences([ 3, 3, 4 ])).toStrictEqual({ 3: 2, 4: 1 });
// 	expect(getElementOccurrences([ 3, 3, 4, 44 ])).toStrictEqual({ 3: 2, 4: 1, 44: 1 });
// });

test('missingNumbers should compare two array and identify elements with differents amounts  ', () => {
	expect(
		missingNumbers(
			[ 203, 204, 205, 206, 207, 208, 203, 204, 205, 206 ],
			[ 203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204 ]
		)
	).toStrictEqual([ 204, 205, 206 ]);
	expect(
		missingNumbers(
			[ 11, 4, 11, 7, 13, 4, 12, 11, 10, 14 ],
			[ 11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12 ]
		)
	).toStrictEqual([ 3, 7, 8, 10, 12 ]);
});
