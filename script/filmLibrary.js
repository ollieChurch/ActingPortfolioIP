const libraryToggle = document.querySelector('.film_library_header')
const libraryBody = document.querySelector('.film_library_bodyContainer')
const libraryToggleIcon = document.querySelector('.film_library_header_icon')
let libraryOpen = false

libraryToggle.addEventListener('click', () => {
    const heightChange = libraryOpen ? '0' : '300px'
    const overflowChange = libraryOpen ? 'hidden' : 'scroll'
    const iconRotate = libraryOpen ? '0' : '45deg'

    libraryBody.style.overflowY = overflowChange
    libraryBody.style.height = heightChange
    libraryToggleIcon.style.transform = `rotate(${iconRotate})`
    libraryOpen = !libraryOpen
}, {passive: true})