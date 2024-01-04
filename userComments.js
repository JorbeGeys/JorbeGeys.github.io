import { allComments, populateComments } from "./commentsFetchAll.js";
import { allResorts, populateResorts } from "./resortFetchAll.js";

let user = JSON.parse(localStorage.getItem("user"));
console.log(user);

function deleteComment(id) {
	console.log("delete function");
	getData(`https://web2-back-end-server.onrender.com/CommentDelete/${id}`, "DELETE").then((data) => {
		console.log(data);
	});
}

function addComment(id, resort_name, user_name, comment, stars) {
	event.preventDefault();
	console.log(id);
	let updatedComment = {
		resort_name: resort_name,
		user_name: user_name,
		comment: comment,
		stars: stars,
		profile_img: "images/profile_img.png",
	};

	getData(`https://web2-back-end-server.onrender.com/CommentPost`, "POST", updatedComment).then((data) => {
		console.log("data Post succesful");
	});
}

async function renderStats() {
	let count = 0;
	for (let i = 0; i < allComments.length; i++) {
		if (allComments[i].user_name == user.username) {
			if (count == 0) {
				let htmlStringStatsEmpty = `
				<div class="comment_items">
					<div class="comment_header">
						<h3>${allComments[i].user_name}</h3>
						<input id="starsInputBox${allComments[i].id}" class="starsInputBox" type="number">
					</div>
					<input id="nameInputBox${allComments[i].resort_name}" class="starsInputBox" type="text">
					<input id="dateInput${allComments[i].id}" type="date">
					<p class="seeThrough">...............</p>
					<input id="commentText${allComments[i].id}" type="text">
					<a href=""><p class="updateButton" id="addButton${allComments[i].id}">Add</p></a>
				</div>
				`;

				document.querySelector("#user_comments").insertAdjacentHTML("beforeend", htmlStringStatsEmpty);

				document.getElementById(`addButton${allComments[i].id}`).addEventListener("click", function () {
					let newResortName = document.getElementById(`nameInputBox${allComments[i].resort_name}`).value;
					let newStars = document.getElementById(`starsInputBox${allComments[i].id}`).value;
					let newComment = document.getElementById(`commentText${allComments[i].id}`).value;

					addComment(allComments[i].id, newResortName, allComments[i].user_name, newComment, newStars);
					alert("Comment succesfully added");
					location.reload();
				});
			}

			count++;
			let htmlStringStats = `
            <div class="comment_items">
                <div class="comment_header">
                    <h3>${allComments[i].user_name}</h3>
                    <input id="starsInputBox${allComments[i].id}" class="starsInputBox" type="number" value="${allComments[i].stars}">
                </div>
                <p>${allComments[i].resort_name}</p>
                <input type="date" value="2023-12-25">
                <p class="seeThrough">...............</p>
                <input id="commentText${allComments[i].id}" type="text" value="${allComments[i].comment}">
                <a href=""><p class="updateButton" id="updateButton${allComments[i].id}">Update</p></a>
				<a href=""><p class="updateButton" id="deleteButton${allComments[i].id}">Delete</p></a>
            </div>
            `;
			document.querySelector("#user_comments").insertAdjacentHTML("beforeend", htmlStringStats);

			document.getElementById(`updateButton${allComments[i].id}`).addEventListener("click", function () {
				let newComment = document.getElementById(`commentText${allComments[i].id}`).value;
				let newStars = document.getElementById(`starsInputBox${allComments[i].id}`).value;
				deleteComment(allComments[i].id);
				addComment(allComments[i].id, allComments[i].resort_name, allComments[i].user_name, newComment, newStars);
				alert("Your comment is succesfully updated");
			});

			document.getElementById(`deleteButton${allComments[i].id}`).addEventListener("click", function () {
				deleteComment(allComments[i].id);
				alert("Your comment is succesfully deleted");
			});
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

render();
