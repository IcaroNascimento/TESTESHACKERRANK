const insertionSort1 = require('./insertionsort1');

test('when the sequency  is "2, 4, 6, 8, 3", return the output  "\n2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8"', () => {
	expect(insertionSort1( 5,[2, 4, 6, 8, 3])).toEqual('2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8');
});
test('when the sequency  is "2, 4, 6, 8, 7", return the output  "\n2 4 6 8 8 \n2 4 6 7 8"', () => {
	expect(insertionSort1(5, [2, 4, 6, 8, 7])).toEqual('2 4 6 8 8 \n2 4 6 7 8');
});
test('when the sequency  is "2, 3, 4, 7, 8", return the output  "2 3 4 7 8"', () => {
	expect(insertionSort1(5 [2, 3, 4, 7, 8 ])).toEqual('2 3 4 7 8');
});