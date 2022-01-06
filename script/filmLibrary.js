const videoPlayer = document.getElementById('videoPlayer-media')
const libraryToggle = document.querySelector('.film_library_header')
const libraryBody = document.querySelector('.film_library_bodyContainer')
const libraryToggleIcon = document.querySelector('.film_library_header_icon')
const library = document.querySelector('.film_library_body')
let libraryOpen = false

libraryToggle.addEventListener('click', () => {
    const heightChange = libraryOpen ? '0' : '300px'
    const iconRotate = libraryOpen ? '0' : '135deg'
    libraryBody.style.height = heightChange
    libraryToggleIcon.style.transform = `rotate(${iconRotate})`
    libraryOpen = !libraryOpen
}, {passive: true})

fetch('../content/media.json')
    .then(response => response.json())
    .then(data => {
        const {showreel, videoLibrary} = data
        videoPlayer.setAttribute('src', showreel)

        videoLibrary.forEach(film => {
            const item = document.createElement('div')
            item.classList.add('film_library_item')

            const image = document.createElement('img')
            image.classList.add('film_library_item_img')
            image.setAttribute('src', film.thumbnail)
            image.setAttribute('alt', film.title)

            const title = document.createElement('p')
            title.classList.add('film_library_item_title')
            title.textContent = film.title

            item.append(image, title)
            item.addEventListener('click', () => {
                videoPlayer.setAttribute('src', film.src)
            })

            library.append(item)
        })
    })
