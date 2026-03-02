pannels = document.querySelectorAll('.pannel');

for (int i = 0; i < 5; i++){
    pannels[i].addEventListener('click', () => {
        pannels[i].classList.add('active')
    })
}
