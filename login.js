document.getElementById("loginform").addEventListener("submit", (event) => {
	event.preventDefault();

	let user = {};
	user.username = document.getElementById("inputUsername").value;
	user.password = document.getElementById("inputPassword").value;

	//check for login
	getData("https://web2-back-end-server.onrender.com/login", "POST", user).then((data) => {
		if (data.status == "Authentication succesfull") {
			localStorage.setItem("user", JSON.stringify(user));
			window.location.href = "userComments.html";
		}
	});
});

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
