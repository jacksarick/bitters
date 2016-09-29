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
	switch(event.keyCode) {
		case 13:
			// Collect input
			const input = prompt.value();

			// Push to recent
			recent.push(input);

			// Send it off
			app.client.send(input);

			// Clear prompt
			prompt.value("");
			break;
	}
});