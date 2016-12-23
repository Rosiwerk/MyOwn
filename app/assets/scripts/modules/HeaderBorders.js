import $ from 'jquery';

class BorderBottom1 {
	constructor() {
		this.border = $(".border-bottom1");;
		this.main2 = $(".header-link1");
		this.events();
	}

	events() {
		this.main2.mouseover(this.toggleTheBorder1.bind(this));
		this.main2.mouseout(this.toggleTheBorder2.bind(this));
	}

	toggleTheBorder1() {
		this.border.addClass("border-is-visible");
	}

	toggleTheBorder2() {
		this.border.removeClass("border-is-visible");
	}
}

var borderBottom1 = new BorderBottom1();

class BorderBottom2 {
	constructor() {
		this.border = $(".border-bottom2");
		this.main2 = $(".header-link2");
		this.events();
	}

	events() {
		this.main2.mouseover(this.toggleTheBorder1.bind(this));
		this.main2.mouseout(this.toggleTheBorder2.bind(this));
	}

	toggleTheBorder1() {
		this.border.addClass("border-is-visible");
	}

	toggleTheBorder2() {
		this.border.removeClass("border-is-visible");
	}
}

var borderBottom2 = new BorderBottom2();

class BorderBottom3 {
	constructor() {
		this.border = $(".border-bottom3");
		this.main2 = $(".header-link3");
		this.events();
	}

	events() {
		this.main2.mouseover(this.toggleTheBorder1.bind(this));
		this.main2.mouseout(this.toggleTheBorder2.bind(this));
	}

	toggleTheBorder1() {
		this.border.addClass("border-is-visible");
	}

	toggleTheBorder2() {
		this.border.removeClass("border-is-visible");
	}
}

var borderBottom3 = new BorderBottom3();

class BorderBottom4 {
	constructor() {
		this.border = $(".border-bottom4");
		this.main2 = $(".header-link4");
		this.events();
	}

	events() {
		this.main2.mouseover(this.toggleTheBorder1.bind(this));
		this.main2.mouseout(this.toggleTheBorder2.bind(this));
	}

	toggleTheBorder1() {
		this.border.addClass("border-is-visible");
	}

	toggleTheBorder2() {
		this.border.removeClass("border-is-visible");
	}
}

var borderBottom4 = new BorderBottom4();

class BorderBottom5 {
	constructor() {
		this.border = $(".border-bottom5");;
		this.main2 = $(".monitor-rosiwerk");
		this.events();
	}

	events() {
		this.main2.mouseover(this.toggleTheBorder1.bind(this));
		this.main2.mouseout(this.toggleTheBorder2.bind(this));
	}

	toggleTheBorder1() {
		this.border.addClass("border-is-visible");
	}

	toggleTheBorder2() {
		this.border.removeClass("border-is-visible");
	}
}

var borderBottom5 = new BorderBottom5();