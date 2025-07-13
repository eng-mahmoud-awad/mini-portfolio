let list = document.querySelector(".header .container ul")
let btn = document.querySelector(".header .container .list")
let btnX = document.querySelector(".header .container ul i")
let header = document.querySelector(".header")
btn.onclick = () => {
    list.classList.add("active")
}
btnX.onclick = () => {
    list.classList.remove("active")
}
// window.onscroll = () => {
//     if(window.pageYOffset > 30) {
//         header.classList.add("active")
//     }
// }
