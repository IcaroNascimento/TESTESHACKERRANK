const circularArrayRotation = require('./circulararrayrotation');

const ABC = 'abc'.split('');
const ABCDEF = 'abcdef'.split('');
test('circularArrayRotation return a element after rotation setting ', () => {
	expect(circularArrayRotation(ABC, 0, [ 0 ])).toStrictEqual('a');
    expect(circularArrayRotation(ABC, 0, [ 1 ])).toStrictEqual('b');
    expect(circularArrayRotation(ABC, 1, [ 1 ])).toStrictEqual('a');
    expect(circularArrayRotation(ABC, 1, [ 0 ])).toStrictEqual('c');
    expect(circularArrayRotation(ABC, 3, [ 0 ])).toStrictEqual('a');
    expect(circularArrayRotation(ABCDEF, 1, [ 5 ])).toStrictEqual('e');
    expect(circularArrayRotation(ABCDEF, 5, [ 5 ])).toStrictEqual('a');
    expect(circularArrayRotation(ABCDEF, 6, [ 5 ])).toStrictEqual('f');
    expect(circularArrayRotation(ABCDEF, 12, [ 5 ])).toStrictEqual('f');
});
