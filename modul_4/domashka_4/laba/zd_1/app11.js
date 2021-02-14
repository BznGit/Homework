const http = require('http');
const fs = require('fs');

const filename = process.argv[3];
const fileStream = fs.createReadStream( filename, { encoding: 'utf8' });

const server = http.createServer( (request, response) => {
	// request.on('connect', function () {
		fileStream.pipe(response);
		fileStream.on('end', () => {
			response.end();
			console.log('connected client');
			fileStream.destroy(()=>{ console.log('Cannot destroy stream') });
			server.close(()=> {
				console.log('Server stopped');
			});
		});
		
	// });
});

server.listen(process.argv[2]);
server.on('error', (err) => {
	concole.log('Error on server', err);
});