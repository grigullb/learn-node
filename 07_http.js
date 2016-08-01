var http = require('http');
function getResponse(url){
	http.get(url, (res)=>{
		res.on("data", (data)=>{
			console.log(data.toString());
		})
	})
}
getResponse(process.argv[2]);