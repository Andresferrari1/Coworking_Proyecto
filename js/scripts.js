
let menu = document.getElementById("menu")
let toggle_Open = document.getElementById("toggle_open")
let toggle_Close = document.getElementById("toggle_close")

toggle_Open.addEventListener("click", toggleMenu)
toggle_Close.addEventListener("click", toggleMenu)

function toggleMenu(){
    menu.classList.toggle("show-menu");

if(menu.classList.contains("show-menu")){
    toggle_Open.style.display= "none";
    toggle_Close.style.display = "block";
} else {
    toggle_Open.style.display= "block";
    toggle_Close.style.display="none";
}
}