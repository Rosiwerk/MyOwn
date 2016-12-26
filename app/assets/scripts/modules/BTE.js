import $ from 'jquery';

class BackgroundTextEffect {
	constructor() {
		this.bte = $(".header-background-text");
	}

	events() {
		this.bte.click(this.effect().bind(this));
	}

	effect() {
		this.bte.addClass("header-background-text-effect");
	}
}