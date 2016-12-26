import $ from 'jquery';

import BorderBottom from './modules/HeaderBorders';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Lightbox from './modules/Lightbox';
import BackgroundTextEffect from './modules/BTE';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".design-div"), "80%");
var stickyHeader = new StickyHeader();
var lightbox = new Lightbox();
var bte = new BackgroundTextEffect();