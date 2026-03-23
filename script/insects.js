screens = document.querySelectorAll('.screen');
choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
start_btn = document.getElementById('start-btn');
game_container = document.querySelector('.game-container');
scoreEl = document.getElementById('score');
timeEl = document.getElementById('time');
score = 0;
seconds = 0;


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
    setInterval(increaseTime, 1000);
}

function createInsect() {
    insect = document.createElement('div');
    insect.classList.add('insect');
    const {x,y} = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${src}" alt"${alt}" style="transform: rotate(${Math.floor(Math.random()*360)}deg)">`;
    game_container.appendChild(insect);
    insect.addEventListener('click', () => {
    catchInsect();
    })
}

function getRandomLocation() {
    width = window.innerWidth;
    height = window.innerHeight;
    x = Math.random()*(width-200) + 100;
    y = Math.random()*(height-200) + 100;
    return{x,y}
}

function catchInsects() {
    increaseScore();
    // this.classList.add('caught');
    // setTimeout( () => this.remove(), 2000);
}

function increaseScore() {
    score++;
    scoreEl.innerHTML = `Score: ${score}`;
}

function increaseTime() {
    seconds ++;
    minutes = Math.floor(seconds/60);
    s = seconds % 60;
    timeEl.innerHTML = `Time: ${minutes}:${seconds}`;
}
