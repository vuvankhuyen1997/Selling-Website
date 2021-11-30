function init() {
	var html_btn = document.getElementById("btn");
	html_btn.onclick = convert_button_click;

	var h2 = document.getElementById("click_h2");
	h2.onclick = h2_click;

	var all_h3 = document.getElementsByTagName('h3');
	var i=0;
	while (i < all_h3.length){
		all_h3[i].onclick = all_h3_click;
		i++
	}
}

function all_h3_click() {
	var html_h3 = document.getElementById("h3_content");
	html_h3.textContent = "You clicked h3";
}

function h2_click() {
	var html_h2 = document.getElementById("h2_content");
	html_h2.innerHTML = "<h1>You click h2</h1>";
}

function print_conversion(usd, vnd) {
	var html_message = document.getElementById("message");
	html_message.textContent = "You enter: " + usd + " USD, this is converted to VND: " + vnd + "k";
}

function convert_button_click() {
	var usd = prompt("Enter USD: ");
	var vnd = usd*23;
	print_conversion(usd, vnd);
}

	

window.onload = init;