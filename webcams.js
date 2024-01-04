let ids = [1470837352, 1312401827, 1547997610, 1604607621, 1462286802, 1451396739, 1675755102]; //  1598681445

let webcamImg = [];

function fetches(id) {
	return fetch(`https://dev2-cors.onrender.com/https://staging.windy.com/webcams/api/v3/webcams/${id}?lang=en&include=images`, {
		headers: {
			"x-windy-api-key": "avAmGpRtHAj0EZSFJmvimDDdZMhgl4ol",
		},
	})
		.then((response) => response.json())
		.then((json) => {
			var name = json.title;
			var parts = name.split(/[>:]/);
			var firstPart = parts[0];

			if (id == 1470837352) {
				document.getElementById("all_webcams").insertAdjacentHTML(
					"afterbegin",
					`
                <div id="large_webcam" class="modalAvailable">
					<img src="${json.images.daylight.preview}" alt="" />
					<h3>${firstPart}</h3>
				</div>;
                `
				);
			} else {
				document.getElementById("small_webcam").insertAdjacentHTML(
					"beforeend",
					`
                <div>
					<img class="modalAvailable" id="small-webcam${id}" data-id="${id}" src="${json.images.daylight.preview}" alt="" />
					<p>${firstPart}</p>
				</div>
                `
				);
			}
		});
}

let fetchPromises = ids.map(fetches); // map each id to a fetch promise

let webcamImgPromise = Promise.all(fetchPromises).then(() => {
	// All fetches are done, dispatch a custom event
	document.dispatchEvent(new Event("webcamsLoaded"));

	// Return webcamImg after all fetches are done
	return webcamImg;

	//can't place export here because export needs to be at ground level
});

export { webcamImgPromise };
