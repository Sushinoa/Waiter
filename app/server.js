var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	if (request.url.search('.html') > -1 || request.url === '/') {

		response.writeHead('Content-Type', 'text/html');

		fs.readFile('index.html', function(error, data) {
			response.end(data);
		});

	} else if (request.url.search('.js') > -1) {
		response.writeHead('Content-Type', 'text/javascript');

		fs.readFile(request.url.replace('/', ''), function(error, data) {
			response.end(data);
		});
	} else if (request.url.search('.css') > -1) {
		response.writeHead('Content-Type', 'text/css');

		fs.readFile(request.url.replace('/', ''), function(error, data) {
			response.end(data);
		});
	} else if (request.url === '/favicon.ico') {
		response.writeHead('Content-Type', 'image/x-icon');

		fs.readFile(request.url.replace('/', ''), function(error, data) {
			response.end(data);
		});
	} else if (request.url.search('.json') > -1) {
		response.writeHead('Content-Type', 'application/json');

		fs.readFile(request.url.replace('/', ''), function(error, data) {
			response.end(data);
		});

	} else if (request.url.search('.jpg') > -1) {
		response.writeHead('Content-Type', 'image/jpg');

		fs.readFile(request.url.replace('/', ''), function(error, data) {
			response.end(data);
		});
	} else if (request.url.search('.png') > -1) {
		response.writeHead('Content-Type', 'image/png');

		fs.readFile(request.url.replace('/', ''), function(error, data) {
			response.end(data);
		});
	}

	else if (request.url.search('.jpeg') > -1) {
		response.writeHead('Content-Type', 'image/jpeg');

		fs.readFile(request.url.replace('/', ''), function(error, data) {
			response.end(data);
		});
	}

	

	if (request.method === 'POST') {
		if (request.url.search('.json')) {

			fs.readFile(request.url.replace('/', ''), function(error, users) {

				request.on('data', function (users) {

					var usersJson = JSON.parse(users);
					console.log(usersJson);
					

				fs.writeFile(request.url.replace('/', ''), JSON.stringify(usersJson), 'utf-8', function(){
					response.writeHead(200);
					response.end();
				});

			});
			});
}
}

if (request.method === 'DELETE') {
	if (request.url.search('.json')) {

		fs.readFile(request.url.replace('/', ''), function(error, users) {
			var usersJson = JSON.parse(users);

		});

		fs.writeFile(request.url.replace('/', ''), JSON.stringify(usersJson), 'utf-8', function(){
			response.writeHead(200);
			response.end();
		});


}
}

}).listen(9090);

console.log('9090');