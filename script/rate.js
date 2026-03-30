
let rated = Number(localStorage.getitem("rated")) === 'false';
rate = document.querySelectorAll('.rate');
star = document.querySelectorAll('.star');

rate.addEventListener('click' () => {
    rate.style.backgroundColor = "yellow";
})
