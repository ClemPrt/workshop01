let propulsion = document.querySelector(".propulsion")
let chiffre = document.querySelector('.chiffre')
let fusee = document.querySelector("#image2")
let number = 10

propulsion.addEventListener('click', function () {
    setInterval(decollage, 1000);
}, false);

function decollage() {
    if(number > 0){
        chiffre.innerHTML = (number -= 1)
    } else {
        chiffre.innerHTML = 0 
        fusee.style.transform = "translateY(-15000px)"
        fusee.style.transition = "all 15s"
    }
    }