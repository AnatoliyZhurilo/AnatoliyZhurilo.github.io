"use strict";

let fullSize = document.querySelector("body");

let hamburger = document.querySelector(".menu");

let navigation = document.querySelector("nav ul");
let navigationButtons = navigation.children;
let navIsDisappeared = true;

let missionBlock =  document.querySelector("#mission");
let missionMask = document.querySelector(".mission-mask");
let missionScrolled = false;
let missionChapter = document.querySelector(" #mission .chapters");

let projectBlock =  document.querySelector("#project");
let projectLogos = document.querySelector(".logos").children;
let projectScrolled = false;

let eventBlock =  document.querySelector("#event");

/////////// variables ////////////////////////

/////////// function for classes ////////////////////////

function classRemoveAdd(){
	function addClass(object, cls){
	if(void 0 === cls) return;

	let arr = object.className.split(" ");

	if(arr.some(function(elem){
		return elem == cls;
	}) ) return;
	arr.push(cls);
	object.className = arr.join(" ");
	}

	function removeClass(object, cls){
	let tempArr = object.className.split(" ");
	tempArr = tempArr.filter(function(word){
			return word != cls;
	});
	object.className = tempArr.join(" ");
	}

	if(arguments[2] && !arguments[1]){
		addClass(arguments[0], arguments[2]);
		return;
	}
	removeClass(arguments[0], arguments[1]);
	addClass(arguments[0], arguments[2]);
}
/////////// function for classes ////////////////////////

///////////menu appearing//////////////////////
hamburger.addEventListener("click", function menuNavigationChanging(){

	let moveLeft = parseInt(getComputedStyle(navigation).right);
	
	if (navIsDisappeared == true){
		navIsDisappeared = false;

		classRemoveAdd(navigation, "navHided", "navShoved");

		classRemoveAdd(hamburger, null,"menu-clicked");

	}else {
		navIsDisappeared = true;

		classRemoveAdd(hamburger, "menu-clicked");

		classRemoveAdd(navigation, "navShoved", "navHided");
		
	}
	
});

///////////menu appearing//////////////////////

///////////navigation-chapter-click//////////////////////

for(let i = 0; i < navigationButtons.length; i++){
	navigationButtons[i].addEventListener("click", function navigationScrollTo(){

		let scrollNow = window["scrollY"];
		let idOf = navigationButtons[i]['textContent'];

		let destination = (document.querySelector("#" + idOf))["offsetTop"];

		let scrollDistance = (destination - scrollNow);
		let scrollDistanceFraction = Math.floor(scrollDistance / 100);

		if(navigator.userAgent.search(/Firefox/) > 0){
			window.scrollTo(0, scrollDistance);
			return;
		}
		for(let j = 0; j < navigationButtons.length; j++){
			classRemoveAdd(navigationButtons[j], "appeared", "gone");
		}
		classRemoveAdd(navigationButtons[i], "gone", "appeared");

		

		

		

		if(idOf == "project") destination = destination + (150 + window["innerHeight"] / 3);
		if(idOf == "mission") destination -= (window["innerHeight"] / 3);
		if(window["innerHeight"] > eventBlock["offsetHeight"] && idOf == "event") destination = (window["pageYOffset"] - eventBlock["offsetHeight"]);
		
		if(destination <= 0) destination = 0;
		
		

		setTimeout(function(){
			let isNotSameAsBefore = window["scrollY"];
			if(window["scrollY"] > destination){

				let scrollInterval = setInterval(function(){
				let step = window["scrollY"] + scrollDistanceFraction;
				if(window["scrollY"] <= destination) {
						clearInterval(scrollInterval);
						for(let i = 0; i < navigationButtons.length; i++){
						classRemoveAdd(navigationButtons[i], "gone", "appeared");
					}
				}
				window.scrollTo(0, step);
				if(window["scrollY"] === isNotSameAsBefore) clearInterval(scrollInterval);

				},1);
			}
			if(window["scrollY"] < destination){
				let scrollInterval = setInterval(function(){
				let step = window["scrollY"] + scrollDistanceFraction;
				if(window["scrollY"] >= destination ) {
						clearInterval(scrollInterval);
						for(let i = 0; i < navigationButtons.length; i++){
						classRemoveAdd(navigationButtons[i], "gone", "appeared");
					}
				}
				window.scrollTo(0, step);
				if(window["scrollY"] === isNotSameAsBefore) clearInterval(scrollInterval);

				},1);
			}
		}, 400);

	});

};

///////////navigation-chapter-click//////////////////////

///////////elements-onscroll-events//////////////////////
fullSize.onscroll = function(){

	//hamburger-button
	if(Math.floor(window["scrollY"]) >= Math.floor(hamburger["offsetHeight"]) + 20 ){
		classRemoveAdd(hamburger, null,"menu-scrolled");
		navigation.style["top"] = "40px";
	}else{
		classRemoveAdd(hamburger, "menu-scrolled");
		navigation.style["top"] = "140px";
	}

	//mission-appearing
	if(!missionScrolled && Math.floor(window["scrollY"]) >=  missionBlock["offsetTop"] - 600 && missionMask.className == "mission-mask") {
		classRemoveAdd(missionMask, null,"gone");
		missionChapter.style["display"] = "block";
		missionScrolled = true;
	}

	//project-logos-appearing
	if(!projectScrolled && Math.floor(window["scrollY"]) >=  projectBlock["offsetTop"] && projectLogos.className == undefined) {

		let i = 0;
		let test = setInterval(function(){
			classRemoveAdd(projectLogos[i], null, "appeared");
				i++
				if(i == projectLogos.length) clearInterval(test);
			}, 100);
		projectScrolled = true;
	}

	//is-it-end?
	if(window["scrollY"] >= (fullSize["offsetHeight"] - window["innerHeight"] - 5) && navIsDisappeared == true){
		hamburger.click();
	}
}


