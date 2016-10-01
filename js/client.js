screen = require("./screen.js");

// Listen for data coming in
app.client.on('data', function(data) {
	let lines = data.toString().split("\n");
	let line;

	for (line in lines){
		console.log(lines[line]);
		let input = lines[line].split(":");
		
		if (input.length == 0){
			continue;
		}

		if (input[0] == ''){
			input = input.slice(1);
		}

		console.log(input);

		input = input.map(function(x) { return x.trim(); });

		switch (input[0]){

			case "PING":
				app.client.send("PONG");
				break;

			default:
				if (input[1]) {
					sender = input[0].split(" ")

					sender[0] = sender[0].split("!")[0]

					screen.put(sender[0], sender[2], input[1].split("\n").join("<br>") + "<br>");
				}
				break;
		}
	}
});



// Add prompt
var prompt = $(".input-prompt");

var recent = []; // Recent messages
var line = 0;    // How far back

// Listen for data going out
prompt.listen("keyup", function(event) {
	
	event.preventDefault();
	const key = event.keyCode;
	
	switch(key) {
		// Enter
		case 13:
			app.send();
			break;

		// Up arrow
		case 38:
			// Set prompt to that line
			prompt.value(recent[line]);

			// Increment line number, if the list goes on
			line += line < recent.length;
			break;

		// Down arrow
		case 40:
			// If there are no more messages, clear
			if (line == 0){
				prompt.value("");
			}

			else{
				// Decrement, if possible
				line -= line > 0;

				// Set prompt to that line
				prompt.value(recent[line]);
			}

			break;
	}
});

// Send function
app.send = function() {
	// $("#send").$.click();

	// Collect input
	const input = prompt.value();

	// Push to recent and reset counter
	recent.unshift(input);
	line = 0;

	// Send it off
	app.client.send(input);

	// Clear prompt
	prompt.value("");
}