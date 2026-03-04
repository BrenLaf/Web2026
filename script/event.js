clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dblclick')

colors = ['blue', 'green', 'purple', 'black', 'rgb(255, 105, 180)','red']
textColor = ['white', 'red', 'black', 'white', 'white', 'black']
index = 0;

clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    clickBox.style.color = textColor[index]
    index++
    if (index == colors.length) {
        index = 0
    }
})

x = 0
y = 0

document.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowRight') {x += 10}
    if (event.key == 'ArrowUp') {y -= 10}
    if (event.key == 'ArrowDown') {y += 10}
    if (event.key == 'ArrowLeft') {x -= 10}
    moveBox.style.transform = `translate(${x}px, ${y}px)`
})

h = 100
w = 300

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.transform = "scale(1.3)"
})

hoverBox.addEventListener('mouseleave', (event) => {
    hoverBox.style.transform = "scale(1)"
})


dblclickBox.addEventListener("dblclick", () => {
    dblclickBox.style.background = colors[index]
    dblclickBox.style.color = textColor[index]
    index ++
    if (index == colors.length) {index = 0}
})
