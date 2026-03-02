pannels = document.querySelectorAll('.pannel');

for (let i = 0; i < 5; i++){
    pannels[i].addEventListener('click', () => {
        pannels[i].classList.add('active')
    })
}
