let doc = document
let figure = doc.querySelector(".footer-img-2")
let popUp = doc.querySelector(".pop-up")
let popUpClose = doc.querySelector(".pop-up-close")
let bookBtn = doc.querySelector(".book-btn")
let sendBtn = doc.querySelector(".form-btn")
let input1 = doc.querySelector("#input1")
let input2 = doc.querySelector("#input2")
let textarea = doc.querySelector(".textarea")
let menu = doc.querySelector(".burgermenu-wrap")
let pullOut = doc.querySelector(".pull-out-menu")


figure.onmouseover = () => {
    let randomLeft;
    let randomTop;
    let randomRotate;
    let rotateDeg;
    randomLeft = Math.round(Math.random() * (1000 - 0) + 0)
    figure.style.left = randomLeft + "px"

    randomTop = Math.round(Math.random() * (90 - 0) + 0)
    figure.style.top = randomTop + "px"

    randomRotate = Math.round(Math.random() * (360 - 0) + 0)
    rotateDeg = randomRotate + "deg"
    figure.style.transform = `rotate(${rotateDeg})`
}

popUpClose.onclick = () => {
    popUp.classList.remove("pop-up-active")
    doc.body.style.overflow = ""
    input1.value = ""
    input2.value = ""
    textarea.value = ""
}

sendBtn.onsubmit = () => {
    popUp.classList.remove("pop-up-active")
    doc.body.style.overflow = ""
}

bookBtn.onclick = (e) => {
    popUp.classList.add("pop-up-active")
    doc.body.style.overflow = "hidden"
    window.scrollTo(0, 0)
    e.preventDefault()
}

function fn() {
    menu.classList.toggle("burgermenu-clicked")
    pullOut.classList.toggle("pull-out-non-active")
    let isPullOutActive = pullOut.classList.contains("pull-out-non-active")
}



doc.addEventListener("keydown", (e) => {
    if (e.keyCode === 81) {
        popUp.classList.remove("pop-up-active")
        doc.body.style.overflow = ""
    }
})

menu.onclick = () => {
    fn()
}

doc.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        fn()
    }
})