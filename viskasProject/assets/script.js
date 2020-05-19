window.onload = () => {

    function $(className) {
        return document.querySelector(className);
    }


///////slider///////
    let sliderContainer = document.querySelector("#slider ul");
    const numberOfSlides = 6;
    let changeTime = 2000;
    let slideNow = 1;

    function addSlide(max) {
        for (let i = 1; i <= max; i++) {
            let li = document.createElement("li");
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "slide";
            radio.className = "forSliding";
            radio.oninput = () => {
                slideNow = i;
            }
            let label = document.createElement("label");
            let slideImage = document.createElement("img");

            let sameImage = `slider${i}`;
            radio.id = label.htmlFor = slideImage.alt = sameImage;
            slideImage.src = `../assets/images/${sameImage}.jpg`;

            sliderContainer.appendChild(li);

            li.append(radio, label, slideImage);
        }
    }

    function sliding(max) {
        let slideButtons = document.querySelectorAll(".forSliding");
        slideButtons[0].checked = true;
        // console.log(slideButtons);

        let interval = setInterval(() => {
            if (slideNow >= max) {
                slideNow = 0
            }
            slideButtons[slideNow].checked = true;
            slideNow++;
        }, 3000 + changeTime);
    }

    function slider(max) {
        addSlide(max);
        sliding(max);
    }

    slider(numberOfSlides);
///////slider///////

//////easter-egg////


}