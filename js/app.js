// toggleNav
const toggleNav = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');



toggleNav.addEventListener('click', () => {
    toggleNav.classList.toggle('active');
    showcase.classList.toggle('active');
})


