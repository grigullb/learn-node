function totalLines(file_path){
	var fs = require('fs');
	var file = fs.readFile(file_path, 'utf8', (err, data) => {
  		if (err) throw err;
  			console.log(data.split('\n').length-1);
	});
}
totalLines(process.argv[2]);