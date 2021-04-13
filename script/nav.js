const navOpen = document.querySelector('.nav_open')
const navClose = document.querySelector('.nav_close')
const navMenu = document.querySelector('nav')
const navLinks = document.querySelectorAll('.nav_link')

navOpen.addEventListener('click', () => toggleMenu(true))
navClose.addEventListener('click', () => toggleMenu(false))

// navLinks.forEach(link => {
//     link.addEventListener('click', () => toggleMenu(false))
// })

function toggleMenu(openMenu) {
    const value = openMenu ? '0' : '100%';
    navMenu.style.transform = `translateX(${value})`
}