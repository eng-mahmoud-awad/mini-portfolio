let list = document.querySelector(".header .container ul")
// let listTr = document.querySelector(".header .container ul.trans")
let btn = document.querySelector(".header .container .list")
let btnX = document.querySelector(".header .container ul i")
let header = document.querySelector(".header")
let li = document.querySelectorAll(".header .container ul li a")
btn.onclick = () => {
    list.classList.add("active");
    list.classList.add("trans");
    document.body.style.overflow = 'hidden';
    
}
btnX.onclick = () => {
    list.classList.remove("trans");
    document.body.style.overflow = 'auto';
}

li.forEach((ele) => {
    ele.onclick = () => {
        // list.classList.remove("active")
        list.classList.remove("trans")
        document.body.style.overflow = 'auto';
    }
})

// if(list.classList.contains("active")) {
    
// }
window.onscroll = () => {
    if(window.pageYOffset > 50) {
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}
