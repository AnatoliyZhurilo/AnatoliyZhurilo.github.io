
	function $(className){
		return document.querySelector(className);
	}
const dude = $('.easter_egg')
let clicks = 0
window.clicks = clicks
const span = $('.easter_egg span')
console.log(dude)
dude.onclick = () => {
	if (clicks < 100) {
			clicks += 1
	}
	span.innerText = `${clicks}/100`
		if (clicks === 100) {
												var audio = new Audio('./assets/clicking2.mp3');
					audio.play();
		const timeout = setInterval(() => {
			if (clicks > 0) {
				apocalipsis()
				clicks -=1
				span.innerText = `${clicks}/100`
			} else {
				clearTimeout(timeout)
			}

		}, 50)

	}

}

const apocalipsis = () => {
	console.log(clicks)
	const dudick = document.createElement('img')
	dudick.src = './assets/images/knuckles2.png'
	dudick.style.width = 100 + 'px'
	document.body.appendChild(dudick)
	dudick.style.position = 'fixed'
	dudick.style.top = Math.round(Math.random() * 20) + '%'
		dudick.style.left = Math.round(Math.random() * 98) + '%'
		dudick.className = 'dudick'
	
		setTimeout(() => {
			document.body.removeChild(dudick)
		}, 1000)
}
