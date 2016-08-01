function totalLines(file_path){
	var fs = require('fs');
	var file = fs.readFileSync(file_path).toString();
	file = file.split('\n');
	console.log(file.length-1);
}
totalLines(process.argv[2]);