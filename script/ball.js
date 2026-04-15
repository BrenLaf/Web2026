const ball = document.createElement('div');
document.body.appendChild(ball);
const LPadel = document.createElement('div');
document.body.appendChild(LPadel);
const ballRadius = 30;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

let ballXPosition = windowWidth/2 - ballRadius;
let ballYPosition = windowHeight/2 - ballRadius;
let ballSpeed = 5;
let ballXDirection = 1;
let ballYDirection = 1;
let LPadelWidth = 20;
let LPadelHeight = 100;
let LPadelSpeed = 20;
let LPadelYPosition = windowHeight / 2 - LPadelHeight /2;

setInterval(moveBall, 10);

function moveBall () {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
    if (ballYPosition <= 0 || ballYPosition >= windowHeight -2 * ballRadius){
        ballYDirection *= -1;
    }
    if(ballXPosition <= 0 || ballXPosition >= windowWidth - 2 * ballRadius) {
        ballXDirection *= -1;
    }
}

let ballTop = ballYPosition;
let ballBottom = ballYPosition +2 * ballRadius;
let ballLeft = ballXPosition;
let LPadelTop = LPadelYPosition;
let LPadelbottom = LPadelYPosition +LPadelHeight;

createBall();
function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor ="blue";
    ball.style.position = "absolute";
    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
}

createLPadel();
function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`;
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = "black";
    LPadel.style.position = 'absolute';
    LPadel.style.left = "50px";
    LPadel.style.top = `${LPadelYPosition}px`;
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'w'){
        if (LPadelYPosition <= 0){
            LPadelYPosition = 0;
        } else {
            LPadelYPosition -= LpadelSpeed;
        }
    }
    if (event.key == 's'){
        // move down
        if (LPadelYPosition >= windowHeight - LPadelHeight) {
            LPadelYPosition = windowHeight -LPadelHeight;
        } else {
            LPadelYPosition += LPadelSpeed;
        }
    }
    LPadel.style.top = `${LPadelYPosition}px`
})
