//Sets the initial colours of the three elements on page load
document.getElementById("blue")
document.getElementById("green")
document.getElementById("red")
//A function to change colours of elements when called
function mix(){

	var first = "#0000FF";
	var second = "#00FF00";
	var third = "#FF0000";

	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.color=second;
	document.getElementById("red").style.color=third;

}
