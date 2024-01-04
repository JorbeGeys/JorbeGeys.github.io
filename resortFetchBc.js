import { allResorts, populateResorts } from "./resortFetchAll.js";

async function logResorts() {
	await populateResorts();
}

async function render() {
	await logResorts();
	for (let i = 0; i < allResorts.length; i++) {
		if (allResorts[i].type == "backcountry") {
			document.querySelector("#freestyle_resorts").insertAdjacentHTML("beforeend", allResorts[i].htmlString);
		}
	}
}

render();
