function getHue(range) {
	var c = function () { return Math.floor(Math.random()*range); }
	return "rgb(" + c() + "," + c() + "x" + c() + ")";
}
