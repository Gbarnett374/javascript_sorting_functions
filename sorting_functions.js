/**
 * Takes in an array and reverses it. 
 * @param  array arr - the array to be reversed. 
 * @return array reversed_array - the reversed array. 
 */
function reverse(arr){
	var arr_length = arr.length -1;
	var reversed_array = [];
	for(var i = arr_length; i >= 0; i--) {
		reversed_array.push(arr[i]);
	}
	return reversed_array
}
/**
 * Takes in an array of numbers and returns the smallest number in the array. 
 * @param  array arr - the array of numbers.
 * @return int smallest_num - the smallest number in the array. 
 */
function getSmallestNumber(arr){
	var smallest_num = arr[0];
	for(var i = 1; i <= arr.length; i++){
		if(smallest_num > arr[i]) {
			smallest_num = arr[i];
		}
	}	
	return smallest_num;
}

/**
 * Sorts an array of numbers from least to greatest. Requires the getSmallestNumber Function. 
 * @param array arr - The array to be sorted.
 * @return array sorted_array - The array of sorted numbers from least to greatest. 
 */
function sort(arr){
	var sorted_array = [];
	while(arr.length) {
		smallest_num = getSmallestNumber(arr);	
		sorted_array.push(smallest_num);
		index = arr.indexOf(smallest_num);
		arr.splice(index,1);
	}
	return sorted_array;
}
