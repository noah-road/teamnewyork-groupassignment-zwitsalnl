// See https://hphoeksma.github.io/toggleclass/
const toggle = document.querySelector('.search-icon');
const search = document.querySelector('.search');
toggle.addEventListener('click', () => {
    search.classList.toggle('visible');
});