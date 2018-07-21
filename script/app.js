//propulsion fusée
let propulsion = document.querySelector(".propulsion")
let chiffre = document.querySelector('.chiffre')
let fusee = document.querySelector("#image2")
let number = 10

propulsion.addEventListener(
    'click', 
    function () {
    setInterval(decollage, 1000);
}, false);

function decollage() {
    if(number > 0){
        chiffre.innerHTML = (number -= 1)
    } else {
        chiffre.innerHTML = 0 
        fusee.style.transform = "translateY(-15000px)"
        fusee.style.transition = "all 15s"
        interrogation.style.transform = "translateY(-15000px)"
        interrogation.style.transition = "all 15s"
    }
    }




//interrogation button
let interrogation = document.querySelector(".absolute img")
let bonus = document.querySelector(".absolute p")
let isActive = 0

interrogation.addEventListener(
    "click",
    function(){
        if (isActive == 0){
            bonus.style.display = "block"
            isActive = 1
        } else {
            bonus.style.display = "none"
            isActive = 0
        }
    }
)




//slider
let bigImg = document.querySelector('.primarySlide img')
let title = document.querySelector('.primarySlide h2')
let thumbnail = document.querySelectorAll('.slides img')

for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener(
        'click',
        function () {
            let altTxt = this.getAttribute('alt')
            let srcBigImg = this.getAttribute('data-srcBigImg')
            bigImg.setAttribute('alt', altTxt)
            bigImg.setAttribute('src', srcBigImg)
            title.innerHTML = altTxt
        }
    )
}
