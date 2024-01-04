"use strict";

export default class Resort {
	constructor(id, name, type, amount_runs, required_level, guides, snow_amount, ski_rental, img) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.amount_runs = amount_runs;
		this.required_level = required_level;
		this.guides = guides;
		this.snow_amount = snow_amount;
		this.ski_rental = ski_rental;
		this.img = img;
	}

	get htmlString() {
		return `
            <div id="freestyle_resort_${this.id}" class="freestyle_resort">
                <a href="comments.html?id=${this.id}"><img src="${this.img}" alt="" /></a>
                <h3>${this.name}</h3>
            </div>
            `;
	}

	get htmlStringStats() {
		return;
		`
		<div class="list">
			<div class="left_column">
				<p>runs</p>
				<p>required level</p>
				<p>guides</p>
				<p>ski rental</p>
				<p>amount of snow (cm)</p>
			</div>
			<div class="right_column">
				<p>${this.amount_runs}</p>
				<p>${this.required_level}</p>
				<p>${this.guides}</p>
				<p>${this.ski_rental}</p>
				<p>${this.snow_amount}</p>
			</div>
		</div>
		`;
	}
}
