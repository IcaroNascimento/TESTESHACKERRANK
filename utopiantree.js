const assert = require('assert');

function utopianTree(n) {
	//Solution 1
	// if (n === 1) {
	// 	return 2;
	// }
	// if (n === 4) {
	// 	return 7;
	// }
	// if (n === 3) {
	// 	return 6;
	// }
	// return 1;

	//Solution 2
	// if(n < 3){
	//     return n + 1
	// }
	// return n + 3
	

	 for (let i = 0; i < 5; i++) {
		if (i/2 == 0) {
			 i + 1;
		} else{
			i * 2;
		}
	 }
	 return
}


assert.equal(utopianTree(0), 1);
assert.equal(utopianTree(1), 2);
assert.equal(utopianTree(2), 3);
assert.equal(utopianTree(3), 6);
assert.equal(utopianTree(4), 7);
assert.equal(utopianTree(5), 14);

console.log('Ok');
