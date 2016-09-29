function Tag(x) {
	if (x[0] == "#") {
		this.main = document.getElementById(x.slice(1));
	}
	if (x[0] == ".") {
		this.main = document.getElementsByClassName(x.slice(1))[0];
	}

	this.style = function(a, v) { this.main.style[a] = v; }
	this.append = function(c) { this.main.innerHTML += c; }
	this.show = function(s) { this.main.style.display = "block"; }
	this.hide = function(s) { this.main.style.display = "none"; }
	this.listen = function(a, f) { this.main.addEventListener(a, f, false); }

	this.html = function(v) {
		if (v != undefined){
			this.main.innerHTML = v;
		}

		else {
			return this.main.innerHTML;
		}
	}

	this.value = function(v) {
		if (v != undefined){
			this.main.value = v;
		}

		else {
			return this.main.value;
		}
	}
}

module.exports = function(name) { return new Tag(name); }