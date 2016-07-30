//Array
// var mang = new Array();
// mang[0] = "thuong";
// mang[1] = 23;
// mang[2] = function (name) {
// 	// body...
// 	console.log("Hello " + name);
// };
// mang[3] = {hoc: "HTML, CSS, JS"};
// console.log(mang);
// // console.log(array[1]);
// mang[2](mang[0]);
// console.log(mang[3].hoc);

// ********************************
// var names = [
// {name: "huong"},
// {age: 23},
// "Hi"
// ]

// ********************************
 // var names = ["Thuong", "Khiem", "Cut"];

 // // for (var i = 0; i < names.length; i++) {
 // // 	document.write(" Hello "+ names[i]);
 // // 	 }
 // names[97] = "con cho";
 // names[100] = "con lon";

 // 	 for (var i = 0; i < names.length; i++) {
 // 	console.log(" Hello "+ names[i]);
 // 	console.log(i);
 // 	 }


// ********************************

var names2 = ["heo", "meo", "cho"];

// var myObj = {
// 	name: "thuong",
// 	course: "HTML, CSS, JSS",
// 	plat: "hoc"
// };
// for (var j in myObj) {
// 	console.log(j + ":" + myObj[j]);
// }
names2.greeting = "Hi!";
names2[10] = "Xin chao!";

for (var name in names2) {
	console.log(name + " Hello " + names2[name]);
}
