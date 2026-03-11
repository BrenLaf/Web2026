buttons = document.querySelector('.buttons')

sounds = ['applause', 'boo', 'gasp', 'victory', 'tada', 'wrong']

for (let i = 0; i < 6; i++) {
    btn = document.createElement('button')
    btn.innerText = sounds[i]
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        document.querySelector(`.${sounds[i]}`).play()
    })
    buttons.appendChild(btn)
}


