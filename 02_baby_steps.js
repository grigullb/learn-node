function addNumbers(numbers){
	var sum = 0;
	for(var i=2; i<numbers.length; i++){
		sum = sum + Number(numbers[i]);
	}
	console.log(sum);
}

addNumbers(process.argv);