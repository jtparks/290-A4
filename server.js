/*
 * Justin Parks
 * parksju@oregonstate.edu
 * Github Name is jtparks
 */

var http = require("http");
var fs   = require("fs");
var path = require("path");
var port = process.env.PORT;

if(!port) {
	port = 3000;					//DO NOT SUBMIT UNTIL SWITCHING DEFAULT TO 3000
}

let server = http.createServer((req, res) => {

	console.log("  == Got a request");
	console.log("    -- url:", req.url);

	var pubpath = path.join(__dirname, 'public');

	if ((req.url === '/') || (req.url === '/index')) {
	
		req.url = '/index.html';
	}

	var fullpath = path.join(pubpath, req.url);

	fs.readFile(fullpath, (err, data) =>
	{
		if (err) {
			res.statusCode = 404;
			req.url = '/404.html';
			var fullpath = path.join(pubpath, req.url);
			fs.readFile(fullpath, (err, data) => {
				res.end(data);
			});
		} else {
			res.statusCode = 200;
			res.end(data);
		}
		
	});
});

server.listen(port, (err) => {
       if(err) {
	       console.log("Error! Something screwed up!");
       }
       else {
	       console.log("== Using Port", port);
       }
});

