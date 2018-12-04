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

///////////menu appearing//////////////////////
hamburger.addEventListener("click", function menuNavigationChanging(){

	let moveLeft = parseInt(getComputedStyle(navigation).right);
	
	if (navIsDisappeared == true){
		navIsDisappeared = false;


		ClassRAT.toggle(navigation, "navShoved");

		ClassRAT.toggle(hamburger, "menu-clicked");

	}else {
		navIsDisappeared = true;
		ClassRAT.toggle(navigation, "navShoved");
		
		ClassRAT.toggle(hamburger, "menu-clicked");

		
		
	}
	
});

///////////menu appearing//////////////////////

///////////navigation-chapter-click//////////////////////

for(let i = 0; i < navigationButtons.length; i++){
	navigationButtons[i].addEventListener("click", function navigationScrollTo(){

		let scrollNow = Math.floor(window["scrollY"]);
		let idOf = navigationButtons[i]['textContent'];
		let destination = (document.querySelector("#" + idOf))["offsetTop"];
		
		if(idOf == "project") destination = Math.floor(destination + (window["innerHeight"] / 2));
		if(idOf == "mission") destination -= Math.floor((window["innerHeight"] / 5));
		if(window["innerHeight"] > eventBlock["offsetHeight"] && idOf == "event") destination = Math.floor(window["pageYOffset"] - eventBlock["offsetHeight"]);
		if(destination <= 0) destination = 1;
		if(scrollNow === destination || Math.abs(scrollNow - destination) < (window["innerHeight"] / 2) )return;

		let scrollDistance = Math.floor(destination - scrollNow);
		let scrollDistanceFraction = Math.floor(scrollDistance / 100);

		for(let j = 0; j < navigationButtons.length; j++){
			ClassRAT.controll(navigationButtons[j], "appeared", "gone");
		}
		ClassRAT.controll(navigationButtons[i], "gone", "appeared");

		setTimeout(function(){
			let isNotSameAsBefore = Math.floor(window["scrollY"]);
			let scrollStart = new Date().getTime();
			let scrolledYet = 0;

			if(Math.floor(window["scrollY"]) > destination){

				let scrollInterval = setInterval(function(){
					let step = Math.floor(window["scrollY"] + scrollDistanceFraction);
					
					window.scrollTo(0, step);
					scrolledYet += Math.abs(scrollDistanceFraction);

					let isToLongScrolling = new Date().getTime();

					if(isToLongScrolling > scrollStart + 1500){
						clearInterval(scrollInterval);
						for(let i = 0; i < navigationButtons.length; i++){
								ClassRAT.controll(navigationButtons[i], "gone", "appeared");
							}
						window.scrollTo(0, destination);
						return;
					}

					if(Math.floor(window["scrollY"]) === isNotSameAsBefore || Math.floor(window["scrollY"]) <= destination){

							for(let i = 0; i < navigationButtons.length; i++){
									ClassRAT.controll(navigationButtons[i], "gone", "appeared");
							}
						clearInterval(scrollInterval);
					} 
				},1);
			}
			if(Math.floor(window["scrollY"]) < destination){
				let scrollInterval = setInterval(function(){
					let step = Math.floor(window["scrollY"] + scrollDistanceFraction);
					
					window.scrollTo(0, step);
					scrolledYet += Math.abs(scrollDistanceFraction);
	
					let isToLongScrolling = new Date().getTime();

					if(isToLongScrolling > scrollStart + 1500){
						clearInterval(scrollInterval);
						for(let i = 0; i < navigationButtons.length; i++){
									ClassRAT.controll(navigationButtons[i], "gone", "appeared");
							}
						window.scrollTo(0, destination);
						return;
					}

					if(Math.floor(window["scrollY"]) === isNotSameAsBefore || Math.floor(window["scrollY"]) >= destination){

							for(let i = 0; i < navigationButtons.length; i++){
									ClassRAT.controll(navigationButtons[i], "gone", "appeared");
							}
							
						clearInterval(scrollInterval);
					} 
				},1);
			}
			
		}, 400);

	});

};

///////////navigation-chapter-click//////////////////////

///////////elements-onscroll-events//////////////////////
fullSize.onscroll = function scrollChangings(){

	

		//hamburger-button
		if(Math.floor(window["scrollY"]) >= Math.floor(hamburger["offsetHeight"]) + 20 ){
			ClassRAT.controll(hamburger, "+","menu-scrolled");
			navigation.style["top"] = "40px";
		}else if(Math.floor(window["scrollY"]) <= Math.floor(hamburger["offsetHeight"]) + 20 ){
			ClassRAT.controll(hamburger, "menu-scrolled");
			navigation.style["top"] = "140px";
		}

		//mission-appearing
		if(!missionScrolled && Math.floor(window["scrollY"]) >=  missionBlock["offsetTop"] - 600 && missionMask.className == "mission-mask") {
			ClassRAT.controll(missionMask, "+","gone");
			missionChapter.style["display"] = "block";
			missionScrolled = true;
		}

		//project-logos-appearing
		if(!projectScrolled && Math.floor(window["scrollY"]) >=  projectBlock["offsetTop"] && projectLogos.className == undefined) {

			let i = 0;
			let test = setInterval(function(){
				ClassRAT.controll(projectLogos[i], "+", "appeared");
					i++
					if(i == projectLogos.length) clearInterval(test);
				}, 100);
			projectScrolled = true;
		}

		//is-it-end?
		if(Math.floor(window["scrollY"]) >= (fullSize["offsetHeight"] - window["innerHeight"] - 5) && navIsDisappeared == true){
			hamburger.click();
		}
	
}


