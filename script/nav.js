let nav = document.querySelector('.nav');

window.addEventListener('scroll' , () => {
    console.log(scrollY);
    if (scrollY >= 518) {
        nav.classList.add('active');
    }
    if (scrollY < 518) {
        nav.classList.remove('active');
    }
})
