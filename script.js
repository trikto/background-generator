var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log(_.without(array, 3));
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("#random");

const setGradient = () => {
	body.style.background = "linear-gradient( to right, " + color1.value + "," + color2.value + ")";
	h3.textContent = body.style.background + ";";
}

const randomColor = () => {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const setRandom = () => {
	color1.value = randomColor();
	color2.value = randomColor();
	console.log(color1.value, color2.value);
	setGradient();
}

setGradient();

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

button.addEventListener("click",setRandom);