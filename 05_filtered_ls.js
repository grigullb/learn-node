function dir_list(dir_path, ext){
	var fs = require('fs');
	var directory = fs.readdir(dir_path, (err, list) => {
  		if (err)
  			console.log(err);

  		var matcher = new RegExp( "." + ext);
  		for(var i=0;i<list.length;i++){
  			if (matcher.test(list[i])){
  				console.log(list[i]);
  			}
  		}
	});
}

dir_list(process.argv[2], process.argv[3]);