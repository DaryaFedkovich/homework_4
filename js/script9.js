console.log("задание 9");
var arr = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57 202",	
	arr2 = arr.split(' '),
	big = 0,
	small = arr2[0];
	
console.log(arr);
console.log(arr2);
for(i = 0; i < arr2.length; i++){
	if(parseInt(arr2[i]) > big){
		big = parseInt(arr2[i]);
	}
	if(parseInt(arr2[i]) < small){
		small = parseInt(arr2[i]);
	}
}
console.log(big);
console.log(small);