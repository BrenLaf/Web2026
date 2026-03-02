pannels = document.querySelectorAll('.pannel');

for (let i = 0; i < 5; i++){
    pannels[i].addEventListener('click', () => {
        removeActiveFromAllPannels()
        pannels[i].classList.add('active')
    })
}

function removeActiveFromAllPannels() {
    for(let i = 0; 1 < 5; i++){
        pannels[i].classList.remove('active')
    }
}
