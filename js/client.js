// Listen for data coming in
app.client.on('data', function(data) {
	$("#content").append(data.toString().split("\n").join("<br>"));
});

// Add prompt
var prompt = $(".input-prompt");

// Listen for data going out
prompt.listen("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode == 13) {
		app.client.send(prompt.value());
		prompt.value("");
	}
});