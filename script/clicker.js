const button = document.querySelector('.buttons');
const money = document.querySelector('.money');
const upgradeClickers = ["Upgrade clicker +1", "upgrade clicker + 10", " upgrade clicker +100", "upgrade clicker + 1000"];


let current_money = Number(localStorage.getItem("current_money")) || 0;
let clickPower = Number(localStorage.getItem("clickPower")) || 1;
let upgrade1 = upgrageClickers[1];


