import './styles/main.scss';
import '../node_modules/picturefill/dist/picturefill.min.js';
import '../node_modules/object-fit-images/dist/ofi.js';

// Create Picture Element for Legacy Browsers
document.createElement("picture");

// Add UserAgent data to HTML tag. Can target for browser specific fixes.
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

// CSS object-fit polyfill
objectFitImages();
