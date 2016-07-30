// Capitalize if the first letter of string = j or J
function toUpperCase(string) {
	// body...
	if ((string.charAt(0) == "j")) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	 else{
	 	return string;
	 }
}
var a = "ohn";
console.log(toUpperCase(a));

// names Array

var names = ["ross", "john", "phoebe", "Jenifer", "jenny"];

for (var name in names) {
	console.log("Hello " + toUpperCase(names[name]));
}
