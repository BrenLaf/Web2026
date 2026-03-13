buttons = document.querySelector('.buttons')

sounds = ['applause', 'boo', 'gasp', 'victory', 'tada', 'wrong']

for (let i = 0; i < 6; i++) {
    btn = document.createElement('button')
    btn.innerText = sounds[i]
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        stopSongs()
        document.querySelector(`.${sounds[i]}`).play()
    })
    buttons.appendChild(btn)
}

function stopSongs() {
    for (let i = 0; i < sounds.length; i++)
    {
        document.querySelector(`.${sounds[i]}`).pause()
        document.querySelector(`.${sounds[i]}`).currentTime = 0
    }
}


