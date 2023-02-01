const images = ["calculator.png", "clock.png","guess the color game.png","login page.png","tic tac toe game.png"]
var count = 0;
function previous(){

	if (count<=0) {
		count = images.length - 1
	} 
	else {
		count -= 1;
	}
	document.getElementById('img').src = images[count]
}
function next(){

	if (count>=(images.length - 1)) {
		count = 0
	} 
	else {
		count += 1;
	}
	document.getElementById('img').src = images[count]
}