const circularArrayRotation = require('./circulararrayrotation');

test('when the sequency  is "1, 2, 3", the number of rotation is "2" and number of queries is "3" first query is "0" element of sequence, second query is "1" element of sequence, third query is "2" element of sequency return the output  "\n2 \n3 \n1"', () => {
expect(circularArrayRotation([1, 2, 3],2,3,[0, 1, 2]).toEqual('2 \n3 \n1');
});

test('when the sequency  is "1, 2, 3", the number of rotation is "2" and number of queries is "3" first query is "1" element of sequence, second query is "2" element of sequence, third query is "0" element of sequency return the output  " \n3 \n1 \n2 "', () => {
expect(circularArrayRotation([1, 2, 3],2,3,[1, 2, 0])).toEqual('3 \n1 \n2');
});

test('when the sequency  is "1, 2, 3", the number of rotation is "2" and number of queries is "3" first query is "2" element of sequence, second query is "1" element of sequence, third query is "0" element of sequency return the output  " \n1 \n3 \n2 "', () => {
expect(circularArrayRotation([1, 2, 3],2,3,[2, 1, 0])).toEqual('1 \n3 \n2');
});
