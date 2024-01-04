"use strict";

export default class Resort {
	constructor(id, resort_name, user_name, comment, stars, profile_img) {
		this.id = id;
		this.resort_name = resort_name;
		this.user_name = user_name;
		this.comment = comment;
		this.stars = stars;
		this.profile_img = profile_img;
	}

	get htmlString() {
		return `
            <div class="comment_items">
                <div class="comment_header">
                    <h3>${this.user_name}</h3>
                    <p>${this.stars}/10</p>
                </div>
				<p>${this.resort_name}</p>
                <p>25/22/2023</p>
                <p class="seeThrough">...............</p>
                <p>${this.comment}</p>
            </div>
            `;
	}
}
