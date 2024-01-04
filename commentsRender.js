import { allComments, populateComments } from "./commentsFetchAll.js";
import { allResorts, populateResorts } from "./resortFetchAll.js";

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
let resortName;

async function renderStats() {
	for (let i = 0; i < allResorts.length; i++) {
		if (allResorts[i].id == id) {
			resortName = allResorts[i].name;

			let htmlStringStats = `
            <div class="list">
                <div class="left_column">
                    <p>runs</p>
                    <p>required level</p>
                    <p>guides</p>
                    <p>ski rental</p>
                    <p>amount of snow (cm)</p>
                </div>
                <div class="right_column">
                    <p>${allResorts[i].amount_runs}</p>
                    <p>${allResorts[i].required_level}</p>
                    <p>${allResorts[i].guides}</p>
                    <p>${allResorts[i].ski_rental}</p>
                    <p>${allResorts[i].snow_amount}</p>
                </div>
            </div>
            `;
			document.querySelector("#general_info").insertAdjacentHTML("beforeend", htmlStringStats);
		}
	}
}

async function logComments() {
	await populateComments();
}

async function logResorts() {
	await populateResorts();
}

async function render() {
	await logComments();
	await logResorts();
	await renderStats();
	for (let i = 0; i < allComments.length; i++) {
		if (allComments[i].resort_name == resortName) {
			document.querySelector("#comments").insertAdjacentHTML("beforeend", allComments[i].htmlString);
		}
	}
}

render();
