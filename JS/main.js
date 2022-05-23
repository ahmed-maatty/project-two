// Initialize and add the map
function initMap() {
    // The location of Uluru
    const cairo = { lat: 30.044420, lng: 31.235712 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: cairo,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    position: cairo,
    map: map,
    });
}


let OPA = document.getElementById("navbar");

window.onscroll = function () {
    if(this.scrollY >= 20){
        OPA.style.cssText="opacity:0.7"
    }else{
        OPA.style.cssText="opacity:1"
    }
}

const menu = document.getElementById("menu");
const show = document.getElementById("show");

menu.addEventListener("click", () => {
    openMenu();
})

function openMenu(){
    menu.classList.toggle("is-active");
    show.classList.toggle("is-active");
}

const menuOf = document.getElementsByClassName("cloz");

for (let i = 0 ; i < 5 ; i++){
    menuOf[i].addEventListener("click", () => {
        closemenu()
    })
}

function closemenu(){
    menu.classList.toggle("is-active");
    show.classList.toggle("is-active");
}

const top0 = document.getElementById("top");

top0.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

const upbtn = document.getElementById("up");

window.onscroll= function (){
    if (this.scrollY > 1000){
        upbtn.classList.add("activion")
    }else {
        upbtn.classList.remove("activion")
    }
}

upbtn.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
