import { webcamImgPromise } from "./webcams.js";

document.addEventListener("webcamsLoaded", function () {
	webcamImgPromise.then((webcamImg) => {
		// Get the modal
		let modal = document.getElementById("myModal");

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		let modalImg = document.getElementById("img01");
		let captionText = document.getElementById("caption");

		document.querySelector("#large_webcam").addEventListener("click", openImgLarge);
		document.querySelector("#small-webcam1675755102").addEventListener("click", openImg); //courchevel
		document.querySelector("#small-webcam1312401827").addEventListener("click", openImg); //Zermatt
		document.querySelector("#small-webcam1547997610").addEventListener("click", openImg); //Cervinia
		document.querySelector("#small-webcam1604607621").addEventListener("click", openImg); //Riksgränsen
		document.querySelector("#small-webcam1462286802").addEventListener("click", openImg); //Ischgl
		document.querySelector("#small-webcam1451396739").addEventListener("click", openImg);

		// Get the <span> element that closes the modal
		let span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function () {
			console.log("span clicked");
			modal.style.display = "none";
		};

		function openImg() {
			event.preventDefault();
			console.log(this.src);
			console.log(this.alt);
			let img = this.src;
			let alt = this.alt;
			if (img) {
				// check if img is not null
				modal.style.display = "block";
				modalImg.src = img;
				captionText.innerHTML = alt;
			} else {
				console.log("img is undefined");
			}
		}

		function openImgLarge() {
			event.preventDefault();
			console.log("clicked img");
			let img = this.querySelector("img");
			if (img) {
				// check if img is not null
				modal.style.display = "block";
				modalImg.src = img.src;
				captionText.innerHTML = img.alt;
			} else {
				console.log("img is undefined");
			}
		}
	});
});
