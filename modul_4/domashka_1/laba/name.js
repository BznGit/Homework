const http = require('http'); // подключение модуля http
const fs = require('fs');    // подключение модуля для работы с файлом
const server = http.createServer((request, response)=>{
    console.log(`Запрошенный адрес: ${request.url}`)
    //const filename = request.url.substring(1);
    response.writeHead(200, {'Content-Type':'text/html'});
     fs.readFile('body.html', 'utf-8', (err, data1) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file 'body.html' is read and sent to the client\n`);       
        };
    
        fs.readFile('footer.html', 'utf-8', (err, data2) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                response.statusCode = 404;
                response.end();
            } else {
                console.log(`The file 'footer.html' is read and sent to the client\n`);
            };
        
            fs.readFile('header.html', 'utf-8', (err, data3) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {
                    console.log(`The file 'header.html' is read and sent to the client\n`);
                    response.write(data1);
                    response.write(data2);
                    response.write(data3);
                    response.end();    
                    console.log("Request accepted!");
                }
            });    
        });
    }); 
});
server.listen(8080, ()=>{console.log("HTTP server works in 8080 port!\n");});
