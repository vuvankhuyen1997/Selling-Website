function cancelButton() {
	window.location = "../index.html";
}

function init() {
	var cancel = document.getElementById("cancel_button");
	cancel.onclick = cancelButton;
}

window.onload = init;