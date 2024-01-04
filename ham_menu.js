var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.left = "-1000px";
menuBtn.onclick = function () {
	if (sideNav.style.left == "-1000px") {
		sideNav.style.left = "0";
		menu.src = "./images/menu_close.png";
	} else {
		sideNav.style.left = "-1000px";
		menu.src = "./images/menu_open.png";
	}
};

$(document).ready(function () {
	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
});
