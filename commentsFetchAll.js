import Comments from "../Comments.js";
let allComments = [];

async function populateComments() {
	let data = await getData("http://localhost:3001/Comments", "GET");
	for (let i = 0; i < data.data.length; i++) {
		let comment = new Comments(data.data[i]._id, data.data[i].resort_name, data.data[i].user_name, data.data[i].comment, data.data[i].stars, data.data[i].profile_img);
		allComments.push(comment);
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

export { allComments, populateComments };
