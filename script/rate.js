let rated = localStorage.getItem("rated") === 'false';

const rate = document.querySelectorAll('.rate');
const star = document.querySelectorAll('.star');

rate.forEach(el => {
    el.addEventListener('click', () => {
        el.style.backgroundColor = "yellow";
    });
});
a
