/*
 * Add your JavaScript to this file to complete the assignment.
 */

document.getElementById('create-twit-button').addEventListener("click", unhide);
document.getElementById('navbar-search-button').addEventListener("click", searchquery);
var canc = document.getElementsByClassName("modal-cancel-button");
var clos = document.getElementsByClassName("modal-close-button");
var acce = document.getElementsByClassName("modal-accept-button");
canc[0].addEventListener("click", hide);
clos[0].addEventListener("click", hide);
acce[0].addEventListener("click", errorcheck);


function unhide() {
	
	var hideclass = document.getElementsByClassName("hidden");
	while (hideclass.length > 0) {
		hideclass[0].classList.add("h");
		hideclass[0].classList.remove("hidden");
	}
}


function errorcheck() {
	var bool;
	if(document.getElementById("twit-text-input").value === "") {
		bool = "false";
	}

	if(document.getElementById("twit-attribution-input").value ==="") {
		bool = "false";
	}
	if(bool === "false") {
		alert ("Please fill in both boxes!");
	}
	else {
	post();
	}
}


function post() {

	var posty = document.getElementsByClassName("twit-container")[0];
	
	var ad = document.createElement("article");
	ad.classList.add("twit");
	
	var plus = document.createElement("div");
	plus.classList.add("twit-icon");
	ad.appendChild(plus);
	
	var plus1 = document.createElement("i");
	plus1.setAttribute("class","fa fa-bullhorn");
	plus.appendChild(plus1);

	var plus = document.createElement("div");
	plus.classList.add("twit-content");
	ad.appendChild(plus);

	var plus1 = document.createElement("p");
	plus1.classList.add("twit-text");

	var text = document.getElementById("twit-text-input");
	plus1.textContent = text.value;	
	
	plus.appendChild(plus1);

	var plus1 = document.createElement("p");
	plus1.classList.add("twit-attribution");

	var text = document.getElementById("twit-attribution-input");
	plus1.textContent = text.value;

	plus.appendChild(plus1);

	posty.appendChild(ad);

	hide();
}


function hide() {
	var showclass = document.getElementsByClassName("h");
	
	while (showclass.length > 0) {
		showclass[0].classList.add("hidden");
		showclass[0].classList.remove("h");
	}

	var clear = document.getElementById("twit-text-input").value = "";
	var clear = document.getElementById("twit-attribution-input").value = "";
}

function searchquery() {
	var twits = document.querySelectorAll('.twit');
	var q = document.getElementById("navbar-search-input");
	for (var i = 0; i < twits.length; i++) {
		if(twits[i].textContent.toLowerCase().indexOf(q.value.toLowerCase()) == -1){
			twits[i].parentNode.removeChild(twits[i]);
		}
	}
}

