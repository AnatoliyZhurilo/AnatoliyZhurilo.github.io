$(document).ready(function(){

let humburger = $('.humburger');
let shadow = $('.shadow');
let preloader = $('.preloader');

	setTimeout(function(){
		preloader.fadeOut();
	}, 1000)

humburger.on('click', function(){
	$('.humb-area').toggleClass('humb-area-d')
	console.log(humburger.css('display'));
	$('.humb-nav').css(`animation-name`,`slideright`);
});
shadow.on('click', function(){
	$('.humb-nav').css(`animation-name`,`slideleft`);
	
	
	setTimeout(function(){
		$('.humb-area').toggleClass('humb-area-d')
	},300)
	
});


// alert("увага! слайдер не js, а css");
// alert("При незадовільній оцінці, надішліть перелік помилок на пошту Tol2890@ukr.net, аби я не допускав їх  у майбутньому");



});
