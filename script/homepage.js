dropdown_content = document.querySelector('.dropdown-content');
dropdown = document.querySelector('.dropdown');
dropbtn = document.querySelector('.dropbtn');

dropbtn.addEventListener('click', () => {
    if (dropdown_content.classList.contains('show')) {
        dropdown_content.classList.remove('show')
    } else {
        dropdown_content.classList.add('show')
    }
})
