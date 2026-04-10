const container = document.getElementById('container');
const text = document.getElementById('text');

let totalTime= 7500;
let breatheTime=(totalTime / 5) *2;
let holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
    text.innerText = 'Breathe In!';
    container.classList.remove('shrink');
    container.classList.add('grow');

    setTimeout( () => {
        text.innerText = 'Hold';

        setTimeout( () => {
            text.innerText = 'Breathe out';
            container.classList.remove('grow')
            container.classList.add('shrink')
        },holdTime);
    }, breatheTime);
}
setInterval(breatheAnimation, totalTime)
