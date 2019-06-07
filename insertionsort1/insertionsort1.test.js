const insertionSort1 = require('./insertionsort1');

test('when the sequency  is "2, 4, 6, 8, 3", return the output  "\n2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8"', () => {
	expect(insertionSort1( 5,[2, 4, 6, 8, 3])).toEqual('2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8');
});
test('when the sequency  is "2, 4, 6, 8, 1", return the output  "\n2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 2 4 6 8 \n1 2 4 6 8"', () => {
	expect(insertionSort1(5, [2, 4, 6, 8, 1])).toEqual('2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 2 4 6 8 \n1 2 4 6 8');
});
test('when the sequency  is "2, 4, 6, 8, 6", return the output  "\n2 4 6 8 8 \n2 4 6 6 8"', () => {
	expect(insertionSort1(5, [2, 4, 6, 8, 6 ])).toEqual('2 4 6 8 8 \n2 4 6 6 8');
});
test('when the sequency  is "2, 4, 6, 8, 10", return the output  "\n2 4 6 8 10"', () => {
	expect(insertionSort1(5, [2, 4, 6, 8, 10 ])).toEqual('2 4 6 8 10');
});
test('when the sequency  is "1", return the output  "\n1"', () => {
	expect(insertionSort1(1, [1])).toStrictEqual('1');
});