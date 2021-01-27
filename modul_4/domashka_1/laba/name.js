const http = require('http'); // подключение модуля http
const fs = require('fs');    // подключение модуля для работы с файлом
const ass = `<html>

<head>
    <title>404</title>
    <meta charset="utf-8" />
</head>
<style>
    img {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
    }

    h1 {
        position: absolute;
        left: 35%;
        top: 45%;
        width: 60%;
        font-size: 60px;
        margin-left: auto;
        margin-right: auto;
    }

    s>h1 {
        top: 90%
    }

</style>

<body>
   
   <img src="./exp.png">
    <h1 id="s">Сервер взорван!</h1>


</body>

</html>`;
const server = http.createServer((request, response)=>{
    console.log(`Запрошенный адрес: ${request.url}`)
    const filename = request.url.substring(1);
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${filename} is read and sent to the client\n`);
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        }
    });
    console.log("Request accepted!");    
});
server.listen(8080, ()=>{console.log("HTTP server works in 8080 port!\n");});
