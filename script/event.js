clickBox = document.querySelector('.click')

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
