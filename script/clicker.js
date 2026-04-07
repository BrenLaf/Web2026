const buttons = document.querySelector('.buttons');
const money = document.querySelector('.money');

let saved = Number(localStorage.getItem("saved")) || 0;
let clickPower = Number(localStorage.getItem("clickPower")) || 1;
let clickCost = Number(localStorage.getItem("clickCost")) || 10;
let clickerUpgrade = Number(localStorage.getItem("clickerUpgrade")) || 0;
let autoclickPower = Number(localStorage.getItem("autoclickPower")) || 0;
let autoclickCost = Number(localStorage.getItem("autoclickCost")) || 100;
let autoclickActive = localStorage.getItem("autoclickActive") === 'true';
let autoclickSpeed = Number(localStorage.getItem("autoclickSpeed")) || 1000; // Default speed 1000ms
let autoclickerSpeedCost = Number(localStorage.getItem("autoclickerSpeedCost")) || 200;
let currentAutoClickSpeed = Number(localStorage.getItem("currentAutoClickSpeed")) || 0;
let autoclickerCount = Number(localStorage.getItem("autoclickerCount")) || 0;
let currentClickLimit = Number(localStorage.getItem("currentClickLimit")) || 0;

let clickPowerLimiter = 50;
let maxAutoClickSpeed = 5;
let autoClickLimiter = 400;
let autoclickInterval;

money.innerText = `$${saved}`;

let clicker = document.createElement('button');
clicker.classList.add('clicker');
clicker.innerText = "Click Me";
buttons.appendChild(clicker);

let upgradeClicker = document.createElement('button');
upgradeClicker.classList.add('upgradeClicker');
upgradeClicker.innerText = `Upgrade Clicker +1/click $${clickCost}`;
buttons.appendChild(upgradeClicker);

let resetButton = document.createElement('button');
resetButton.classList.add('resetGame');
resetButton.innerText = "Reset Progress";
buttons.appendChild(resetButton);

let autoclick = document.createElement('button');
autoclick.classList.add('autoclick');
autoclick.innerText = `Auto Click +5/sec $${autoclickCost}`;
buttons.appendChild(autoclick);

let autoclickerSpeed = document.createElement('button');
autoclickerSpeed.classList.add('autoclickerSpeed');
autoclickerSpeed.innerText = `Auto Click Speed $${autoclickerSpeedCost}`;
buttons.appendChild(autoclickerSpeed);

// CLICK BUTTON
clicker.addEventListener('click', () => {
    saved += clickPower;
    saved = Math.floor(saved);
    money.innerText = `$${saved}`;
    saveGame();
});

// UPGRADE BUTTON
upgradeClicker.addEventListener('click', () => {
    if (saved >= clickCost) {
        saved -= clickCost;
        clickCost += 10;
        clickPower ++;
        upgradeClicker.innerText = `Upgrade clicker +1/click $${clickCost}`;
        money.innerText = `$${saved}`;
        saveGame();
    }
});

// AUTO-CLICKER BUTTON
autoclick.addEventListener('click', () => {
    if (autoclickerCount < autoClickLimiter){
        if (saved >= autoclickCost) {
            saved -= autoclickCost;
            autoclickerCount ++;
            autoclickPower += 5; // Increment autoclickPower
            money.innerText = `$${saved}`;
            autoclickCost += 100;

            autoclick.innerText = `Auto Click +5/sec $${autoclickCost}`;

            if (!autoclickActive) {
                autoclickActive = true;
                saveGame();

                // Start the auto-clicker with the speed stored in autoclickSpeed
                autoclickInterval = setInterval(() => {
                    saved += autoclickPower;
                    money.innerText = `$${saved}`;
                    saveGame();
                }, autoclickSpeed);
            }
        }
        if (autoclickerCount == autoClickLimiter){
            autoclick.innerText = "Auto Click $MAX"
        }
    }
    saveGame();
});


// AUTO-CLICK SPEED UPGRADE
autoclickerSpeed.addEventListener('click', () => {
    if (currentAutoClickSpeed < maxAutoClickSpeed)
    {
        if (saved >= autoclickerSpeedCost) {
        // If the player has enough money for the speed upgrade
            saved -= autoclickerSpeedCost;  // Deduct the cost for upgrading speed
            if (currentAutoClickSpeed == 3){
                autoclickerSpeedCost *= 2;
            } else if(currentAutoClickSpeed == 2) {
            autoclickerSpeedCost += 45000;
            }else if(currentAutoClickSpeed == 1) {
            autoclickerSpeedCost *= 5;
            } else if(currentAutoClickSpeed == 0) {
            autoclickerSpeedCost += 800;
            }
            currentAutoClickSpeed ++;
        // Reduce the auto-click speed (decrease the interval)
            if (autoclickSpeed > 250) {
                autoclickSpeed -= 250;  // If speed is greater than 250ms, reduce by 250ms
            } else {
                autoclickSpeed -= 100;  // Else, reduce by 100ms
            }

            money.innerText = `$${saved}`;  // Update the money display
            autoclickerSpeed.innerText = `Auto Click Speed $${autoclickerSpeedCost}`;  // Update button text

        // If the auto-clicker is active, reset the interval with the new speed
            if (autoclickActive) {
                clearInterval(autoclickInterval);  // Clear the old interval
                autoclickInterval = setInterval(() => {
                    saved += autoclickPower;  // Increase saved amount by autoclickPower
                    money.innerText = `$${saved}`;  // Update money display
                    saveGame();  // Save game progress
                }, autoclickSpeed);  // Set the new interval with updated speed
            }
            if (currentAutoClickSpeed == maxAutoClickSpeed) {
                autoclickerSpeed.innerText = `Auto Click Speed MAX`;
            }
        }
        saveGame();  // Save game state to localStorage
    }
});

// RESET BUTTON
resetButton.addEventListener('click', () => {
    if (autoclickInterval) {
        clearInterval(autoclickInterval);
        autoclickActive = false;
    }

    const userConfirmedReset = confirm("Are you sure you want to reset your game? \nYour progress will be reset Forever");
    if (userConfirmedReset) {
        localStorage.removeItem("saved");
        localStorage.removeItem("clickPower");
        localStorage.removeItem("clickCost");
        localStorage.removeItem("clickerUpgrade");
        localStorage.removeItem("autoclickPower");
        localStorage.removeItem("autoclickCost");
        localStorage.removeItem("autoclickActive");
        localStorage.removeItem("autoclickSpeed");
        localStorage.removeItem("autoclickerSpeedCost");
        localStorage.removeItem("currentAutoClickSpeed");
        localStorage.removeItem("autoclickerCount");
        localStorage.removeItem("currentClickLimit");

        saved = 0;
        clickPower = 1;
        clickCost = 10;
        clickerUpgrade = 0;
        autoclickPower = 0;
        autoclickCost = 100;
        autoclickSpeed = 1000;
        currentAutoClickSpeed = 0;
        autoclickerCount = 0
        currentClickLimit = 0

        money.innerText = `$${saved}`;
        autoclick.innerText = `Auto Click $${autoclickCost}`;
        autoclickerSpeedCost = `Auto Click Speed $${autoclickSpeed}`



        saveGame();

        location.reload();
    }
});

// AUTO SAVE
setInterval(saveGame, 5000);

// Save game state to localStorage
function saveGame() {
    localStorage.setItem("saved", saved);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("clickCost", clickCost);
    localStorage.setItem("clickerUpgrade", clickerUpgrade);
    localStorage.setItem("autoclickPower", autoclickPower);
    localStorage.setItem("autoclickCost", autoclickCost);
    localStorage.setItem("autoclickActive", autoclickActive);
    localStorage.setItem("autoclickSpeed", autoclickSpeed);
    localStorage.setItem("autoclickerSpeedCost", autoclickerSpeedCost);
    localStorage.setItem("currentAutoClickSpeed", currentAutoClickSpeed);
    localStorage.setItem("autoclickerCount", autoclickerCount);
    localStorage.setItem("currentClickLimit", currentClickLimit);
}

// Resume the auto-click process on page load if it was active before
function startAutoClicker() {
    if (autoclickActive) {
        autoclickInterval = setInterval(() => {
            saved += autoclickPower;
            money.innerText = `$${saved}`;
            saveGame();
        }, autoclickSpeed);
    }
}

// Start auto-clicker if it was active before
startAutoClicker();
