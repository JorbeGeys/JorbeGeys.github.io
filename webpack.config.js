const path = require("path");

module.exports = {
	entry: {
		Comments: "./src/Comments.js",
		commentsFetchAll: "./src/commentsFetchAll.js",
		commentsRender: "./src/commentsRender.js",
		ham_menu: "./src/ham_menu.js",
		login: "./src/login.js",
		modal: "./src/modal.js",
		register: "./src/register.js",
		Resort: "./src/Resort.js",
		resortFetchAll: "./src/resortFetchAll.js",
		resortFetchBc: "./src/resortFetchBc.js",
		resortFetchFs: "./src/resortFetchFs.js",
		resortFetchTs: "./src/resortFetchTs.js",
		userComments: "./src/userComments.js",
		webcams: "./src/webcams.js",
	},
	output: {
		path: path.resolve(__dirname, "docs"),
		filename: "[name].js",
	},
	module: "development",
};
