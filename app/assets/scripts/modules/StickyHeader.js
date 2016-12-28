import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".header");
		this.triggerPlace = $(".header-background-text");
		this.createHeaderWaypoint();

		this.befree = $(".header-background");
		this.design = $(".design");
		this.features = $(".features");

		this.befreelink = $(".monitor-rosiwerk");
		this.designlink = $(".header-link2");
		this.featureslink = $(".header-link3");

		this.createBefreeWaypoint();
		this.createDesignWaypoint();
		this.createFeaturesWaypoint();


		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.befreelink.smoothScroll();
		this.designlink.smoothScroll();
		this.featureslink.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: that.triggerPlace[0],
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("header-sticky");
				} else {
					that.siteHeader.removeClass("header-sticky");
				}
			},
			offset: "20%"
		});
	}

	createBefreeWaypoint() {
		var that = this;
		this.befree.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.befreelink.removeClass("wpl-befree");
						that.befreelink.removeClass("befree-is-current-link");
						that.designlink.removeClass("design-is-current-link");
						that.featureslink.removeClass("features-is-current-link");
						$(matchingHeaderLink).addClass("befree-is-current-link");	
					}
				},
				offset: "-20%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.befreelink.removeClass("wpl-befree");
						that.befreelink.removeClass("befree-is-current-link");
						that.designlink.removeClass("design-is-current-link");
						that.featureslink.removeClass("features-is-current-link");
						$(matchingHeaderLink).addClass("befree-is-current-link");	
					}
				},
				offset: "-30%"
			});
		});
	}

	createDesignWaypoint() {
		var that = this;
		this.design.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.befreelink.removeClass("wpl-befree");
						that.befreelink.removeClass("befree-is-current-link");
						that.designlink.removeClass("design-is-current-link");
						that.featureslink.removeClass("features-is-current-link");
						$(matchingHeaderLink).addClass("design-is-current-link");
					}
				},
				offset: "38%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.befreelink.removeClass("wpl-befree");
						that.befreelink.removeClass("befree-is-current-link");
						that.designlink.removeClass("design-is-current-link");
						that.featureslink.removeClass("features-is-current-link");
						$(matchingHeaderLink).addClass("design-is-current-link");
					}
				},
				offset: "-85%"
			});
		});
	}

	createFeaturesWaypoint() {
		var that = this;
		this.features.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.befreelink.removeClass("wpl-befree");
						that.befreelink.removeClass("befree-is-current-link");
						that.designlink.removeClass("design-is-current-link");
						that.featureslink.removeClass("features-is-current-link");
						$(matchingHeaderLink).addClass("features-is-current-link");
					}
				},
				offset: "38%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.befreelink.removeClass("wpl-befree");
						that.befreelink.removeClass("befree-is-current-link");
						that.designlink.removeClass("design-is-current-link");
						that.featureslink.removeClass("features-is-current-link");
						$(matchingHeaderLink).addClass("features-is-current-link");
					}
				},
				offset: "-30%"
			});
		});
	}
}

export default StickyHeader;