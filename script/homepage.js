dropdown_content = document.querySelector('.dropdown-content');
dropdown = document.querySelector('.dropdown');
dropbtn = document.querySelector('.dropbtn');
arrow = document.querySelector('.fa-solid.fa-angle-down');

dropbtn.addEventListener('click', () => {
    if (dropdown_content.classList.contains('show')) {
        dropdown_content.classList.remove('show')
        arrow.classList.remove('up');
    } else {
        arrow.classList.add('up');
        dropdown_content.classList.add('show')
    }
})
