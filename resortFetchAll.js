import Resort from "../Resort.js";
let allResorts = [];

async function populateResorts() {
	let data = await getData("https://jorbegeys.github.io/Resorts", "GET");
	for (let i = 0; i < data.data.length; i++) {
		let resort = new Resort(data.data[i]._id, data.data[i].name, data.data[i].type, data.data[i].amount_runs, data.data[i].required_level, data.data[i].guides, data.data[i].snow_amount, data.data[i].ski_rental, data.data[i].img);
		allResorts.push(resort);
	}
}

async function getData(url, method, data) {
	let resp = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return await resp.json();
}

export { allResorts, populateResorts };
