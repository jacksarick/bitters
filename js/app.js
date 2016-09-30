// My jQuery custom
const $ = require("./jackQuery.js");

// The net library
var net = require('net');

// The app
var app = {

	client: new net.Socket(),

	// The user's data
	user_data: {},

	// Dump the user's data
	dump: function() { console.log(this.user_data); },

	// Record the "new-server" data to the app
	userData: function(div) {
		this.user_data.nickname = $("#nickname").value();
		this.user_data.username = $("#username").value();
		this.user_data.realname = $("#realname").value();
	},

	// Dev function to auto-set names
	hardSet: function(n) {
		this.user_data.nickname = n;
		this.user_data.username = n+"-user";
		this.user_data.realname = n+"-real";
	},

	// Make new connection with server and port
	connect: function(server, port) {
		app.client.connect(port, server, function() {
			app.client.send('NICK ' + app.user_data.nickname);
			app.client.send('USER ' + app.user_data.username + ' 8 * ' + app.user_data.realname);
			console.log('Connected');
		});
	}
};

// Minor change, to terminate lines with \r\n
app.client.send = function(data) {
	try {
		app.client.write(data + "\r\n");
	}

	catch(err) {
		alert("No connection to the server.");
		console.log(err);
	}

}

module.exports = app;

console.log("app loaded");