clickBox = document.querySelector('.click')

colors= ['blue', 'green', 'purple', 'black', 'red']
index = 0;

clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    index++
    if (index == 6) {
        index = 0
    }
    clickBox.style.color = 'white'
})
