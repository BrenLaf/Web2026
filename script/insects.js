screens = document.querySelectorAll('.screen');
choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
start_btn = document.getElementById('start-btn');
game_container = document.querySelector('.game-container')

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up');
})


for (let i = 0; i < choose_insect_btn.length; i++)
{
    choose_insect_btn[i].addEventListener('click', () => {
    screens[1].classList.add('up');
    img = choose_insect_btn[i].querySelector('img');
    src = img.getAttribute('src');
    alt = img.getAttribute('alt');
    startGame();
    })
}

function startGame() {
    // TO DO
    setTimeout(createInsect, 1000);
}

function createInsect() {
    insect = document.createElement('div');
    insect.classList.add('insect');
    insect.innerHtml = `<img src="images/moth.png" alt="">`;
    game_container.appendChild(insect)
}
