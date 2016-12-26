import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.link1 = $(".header-link1");
		this.link2 = $(".header-link2");
		this.link3 = $(".header-link3");
		this.link4 = $(".header-link4");
		this.menuContent = $(".header");
		this.menuIcon = $(".mobile-menu-icon");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("header-is-visible");
		this.menuIcon.toggleClass("mobile-menu-icon--close-x");
	}
}

export default MobileMenu;