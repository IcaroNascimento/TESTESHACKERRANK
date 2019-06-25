function getElementOccurrences(array) {
	let obj = {}
	for (let i = 0; i < array.length; i++) { 
		if (obj[array[i]] = obj[array[i]]) {
			obj[array[i]] += 1 
			}
			else{
			 obj[array[i]] = 1
			}	
	}

	return obj

}


module.exports = { getElementOccurrences };
