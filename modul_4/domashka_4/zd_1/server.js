var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require('path');

var mimeTypes = {
	'.js' : 'text/javascript',
	'.html': 'text/html',
	'.css' : 'text/css' ,
	'.jpg' : 'image/jpeg',
	'.JPG' : 'image/jpeg',
	'.gif' : 'image/gif',
	'.png' : 'image/png',
	'.json': 'application/json'
};

http.createServer(function onRequest(request, response) {
	if(request.method === 'GET') {	
		var postData = "";
		var pathname = url.parse(request.url).path;
		
		if(pathname == '/')
			pathname = '/index.html';
		var extname = path.extname(pathname);
		var mimeType = mimeTypes[extname];
		//чтобы убрать начальный слэш
		pathname = pathname.substring(1, pathname.length);
		let arr = pathname.split('?');
		console.log(arr[0]);
		console.log(arr[1]);
		if (arr[0]=='delet') {
			var json1 = fs.readFileSync('./images.json');
			var dataImg1 = JSON.parse(json1);
			var elem = dataImg1.find(item=>item.id == parseInt(arr[1]));
			var index = dataImg1.indexOf(elem);
			dataImg1.splice(index, 1);			
			json1 = JSON.stringify(dataImg1);
			fs.writeFileSync('./images.json', json1);
			fs.unlinkSync(elem.src);
			console.log(elem.src);
			
		}
		
		if( (extname == ".gif") || (extname==".jpg") || (extname==".png") ) {
			var img = fs.readFileSync('./' + pathname);
			response.writeHead(200, {'Content-Type': mimeType});
			response.end(img, 'binary');
		} else {
			fs.readFile(pathname, 'utf8', function (err, data){
				if (err) {
					console.log('Could not find or open file '+ 
					pathname + ' for reading\n');
				} else {
					response.writeHead(200, {'Content-Type': mimeType});
					response.end(data);
				}
			});
		}
	} else if (request.method === 'POST') {
		var pathname = url.parse(request.url).path;
		//чтобы убрать начальный слэш
		pathname = pathname.substring(1, pathname.length);
		let arr = pathname.split('?');
		var filename =  arr[1];
		pathname = arr[0];
		var json = fs.readFileSync('./images.json');
		var dataImg = JSON.parse(json);
		var int=null;
		if (dataImg.length==0) int=1; else{
			do {
				int = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
				
			} while (dataImg.find(item=>item.id !== int) == undefined);
		}
		dataImg.push({id: int, src: './' + decodeURI(pathname.toLowerCase(pathname)), name: filename, del: false });
		json = JSON.stringify(dataImg);
		fs.writeFileSync('./images.json', json);
		fs.end;
		var newFileStream = fs.createWriteStream('./'+ pathname);
		request
			.on('data', function(chunk){
				newFileStream.write(chunk);
			})
			.on('end', function(){
				newFileStream.end();
				response.writeHead(200);
				response.end();
			});
	}
}).listen(8080, ()=>{console.log('Server run in 8080 port')});
