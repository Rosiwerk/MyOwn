import $ from 'jquery';

class Lightbox {
	constructor() {
		this.open = $(".header-link1");
		this.close = $(".lightbox-close");
		this.lightbox = $(".lightbox");
		this.events();
	}

	events() {
		this.open.click(this.openModal.bind(this));
		this.close.click(this.closeModal.bind(this));
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.lightbox.addClass("lightbox-is-visible");
		return false;
	}

	closeModal() {
		this.lightbox.removeClass("lightbox-is-visible");
	}
}

export default Lightbox;