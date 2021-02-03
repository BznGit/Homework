let http = require('http'); // подключение модуля для работы с http
let fs = require('fs'); // подключение модуля для работы с файлом
let path = require('path'); // подключение модуля для работы с путями в файловой системе
let url = require('url')
let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    };
http.createServer((request, response) => {
    let pathname, extname, mimeType;
    console.log("Request: " + request.url);
   if (request.url === '/')
        pathname = 'index.html';
    else
        pathname = '.' + request.url;
   
    console.log(pathname);  
    let myURL = url.parse(pathname, true);
    let param = myURL.query;// параметр передаваемый в url
    let pat =  myURL.pathname;//чистый url
    extname = path.extname(pat);
    console.log(pat, param.count);
    mimeType = mimeTypes[extname];
    if (extname === ".jpg" || extname === ".gif" || extname === ".ico") {
        try {
            let img = fs.readFileSync(pat);
            console.log(`The file ${pat} is read and sent to the client\n`);
            response.writeHead(200, {'Content-Type': mimeType});
            response.end(img);
        } catch (e) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        }
    } else {
        fs.readFile(pat, 'utf8', (err, data) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                response.statusCode = 404;
                response.end();
            } else {
                console.log(`The file ${pat} is read and sent to the client\n`);
                response.writeHead(200, {'Content-Type': mimeType});
                if (extname === ".json"){
                    
                    var piceData = JSON.parse(data) 
                    var newpiceData=[];
                    for (let i=0; i<param.count; i++){
                        newpiceData.push(piceData[i]);   
                    }
                    data = JSON.stringify(newpiceData);
                    console.log(newpiceData);   
                }
                response.end(data);
            }
        });
    }
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});

