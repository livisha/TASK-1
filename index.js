document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#secondary-slider', {
        fixedWidth: 800,
		rewind    : true,
        isNavigation:  true,
		gap       : 100,
		pagination: false,
        focus     : 'center',
        start     : 2,
        trimSpace : false
        
	} ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {

    var secondarySlider = new Splide( '#secondary-slider2', {
		fixedWidth  : 140,
		height      : 80,
		gap         : 10,
		cover       : true,
		isNavigation: true,
        rewind      : true,
        start       : 3,
		focus       : 'center',
		
	} ).mount();


	var primarySlider = new Splide( '#image-slider', {
		
        type       : 'fade',
		heightRatio: 0.5,
        start      : 3,
		pagination : false,
        rewind     : true,
		arrows     : false,
		cover      : true,
	} ).mount();

    primarySlider.sync( secondarySlider ).mount();
} );