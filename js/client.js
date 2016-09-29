// Listen for data coming in
app.client.on('data', function(data) {
	$("#content").append(data.toString().split("\n").join("<br>"));
});

// Add prompt
var prompt = $(".input-prompt");

var recent = []; // Recent messages
var line = 0;    // How far back

// Listen for data going out
prompt.listen("keyup", function(event) {
	
	event.preventDefault();
	const key = event.keyCode;
	
	console.log(key);
	
	switch(key) {
		// Enter
		case 13:
			// Collect input
			const input = prompt.value();

			// Push to recent and reset counter
			recent.unshift(input);
			line = 0;

			// Send it off
			app.client.send(input);

			// Clear prompt
			prompt.value("");
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
			console.log(line);
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