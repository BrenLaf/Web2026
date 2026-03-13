const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

const int = setInterval(bluring, 30)

function bluring() {
    load = load + 1

    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load / 100

    bg.style.filter = `blur(${50 - load / 2}px)`

    if (load > 99) {
        clearInterval(int)
    }
}
