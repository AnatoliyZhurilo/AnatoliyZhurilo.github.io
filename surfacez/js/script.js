let body = document.querySelector("body");
let buttons = document.querySelectorAll("a");
let main = document.querySelector("main");

let athlets = document.querySelector("#athlets");
let footballer = document.querySelector("#footballer");
let basketballer = document.querySelector("#basketballer");

let headerM = document.querySelector("header");
let header = document.querySelector(".header-contain");

let main1 = document.querySelector("#athletsAndPlayers");
let main2 = (document.querySelector("#suggestions"))["offsetHeight"];
let oneSugg = (document.querySelector(".sugg"))["offsetHeight"];
let cube = document.querySelector("#suggCube");

let footer = document.querySelector("footer");
let dA = document.querySelector("#downloadApp");
let leftB = document.querySelector("#footerButtonLeft");
let rightB = document.querySelector("#footerButtonRight");


if(window.innerWidth <= 480){
	footballer.src = "images/img/footballer_192-min.png";
	basketballer.src = "images/img/basketballer_302-min.png";
}else if(window.innerWidth <= 768 && window.innerWidth > 600){
	footballer.src = "images/img/footballer_497-min.png";
	basketballer.src = "images/img/basketballer_436-min.png";
}


document.onmousemove = (event) => {
	if(window.innerWidth > 769){
		console.log(window.innerWidth > 1000);
		let x = event.clientX * 100 / window.innerWidth;
		let y = event.clientY * 100 / window.innerHeight;
		header.style["backgroundPositionX"] =  - x + "px";
		header.style["backgroundPositionY"] =  - y + "px";
	}
	
}
////

let deviceW = window["innerHeight"];
let headerScrolled = header["offsetHeight"];
let mainOneScrolled = headerScrolled + main1["offsetHeight"];
let mainTwoScrolled = mainOneScrolled + main2;
let footerScrolled = mainTwoScrolled + footer["offsetHeight"];

////
let cubeOne = (mainOneScrolled + oneSugg/2);

let cubeTwo = (cubeOne + oneSugg);

////
let forF = (headerScrolled - deviceW/2);
let isF = false;
let forB = (headerScrolled + athlets["offsetHeight"] - deviceW/2);
let isB = false;
let forHF = (headerScrolled + main["offsetHeight"]/2);
let wasEnd = false;
let forEnd = (footerScrolled - deviceW) - 30;
body.onscroll = () =>{
	//footballer appear//
	if(isF == false && Math.floor(window["scrollY"]) > forF){
		ClassRAT.reClass(footballer, "f-disap");
		setTimeout(() => {
			ClassRAT.addClass(footballer, "playerAnim");
		}, 1999);
		isF = true;
	}
	//basketballer appear//
	if(isB == false &&Math.floor(window["scrollY"]) > forB){
		ClassRAT.reClass(basketballer, "b-disap");
		setTimeout(() => {
			ClassRAT.addClass(basketballer, "playerAnim");
		}, 1999);
		isB = true;
	}
	//header <=> footer//
	if(Math.floor(window["scrollY"]) > forHF){
		headerM.style["zIndex"] = "-10";
	}else{
		headerM.style["zIndex"] = "-1";
	}
	///suggcube//
	if(Math.floor(window["scrollY"]) > cubeOne && window["scrollY"] < cubeTwo){
		console.log(2);
		ClassRAT.controll(cube, "-", "Now1","Now3");
		ClassRAT.addClass(cube, "Now2");
	}else if(Math.floor(window["scrollY"]) < cubeOne ){
		console.log(1);
		ClassRAT.controll(cube, "-", "Now2","Now3");
		ClassRAT.addClass(cube, "Now1");
	}else if(window["scrollY"] > cubeOne){
		console.log(3);
		ClassRAT.controll(cube, "-", "Now2","Now1");
		ClassRAT.addClass(cube, "Now3");
	}

	if(wasEnd == false && Math.floor(window["scrollY"]) >= forEnd){
		console.log(true);
		ClassRAT.controll(leftB, "+", "pushing");
		setTimeout(() => {
			ClassRAT.controll(rightB, "+", "pushing");
		}, 500);
		setTimeout(() => {
			ClassRAT.controll(dA, "+", "bounce");
		}, 1000);
		wasEnd = true;
	}

}