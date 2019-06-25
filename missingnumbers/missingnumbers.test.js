const getElementOccurrences = require('./missingnumbers').getElementOccurrences;


test('getElementOccurrences should transform an array into an object with element ocurrences ', () => {
	expect(getElementOccurrences([3],
		)).toStrictEqual({3:1});
	expect(getElementOccurrences([3,3],
		)).toStrictEqual({3:2});
	expect(getElementOccurrences([3,3,4],
		)).toStrictEqual({3:2, 4:1});	
	expect(getElementOccurrences([3,3,4,44],
		)).toStrictEqual({3:2, 4:1, 44:1});
			
});
