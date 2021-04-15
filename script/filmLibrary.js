const libraryToggle = document.querySelector('.film_library_header')
const libraryBody = document.querySelector('.film_library_bodyContainer')
const libraryToggleIcon = document.querySelector('.film_library_header_icon')
let libraryOpen = false

libraryToggle.addEventListener('click', () => {
    const heightChange = libraryOpen ? '0' : '300px'
    const iconRotate = libraryOpen ? '0' : '45deg'

    libraryBody.style.height = heightChange
    libraryToggleIcon.style.transform = `rotate(${iconRotate})`
    libraryOpen = !libraryOpen
}, {passive: true})

const filmData = [
    {
        thumbnailSrc: 'http://placekitten.com/150/100',
        title: 'Showreel 2021',
        youtubeSrc: 'https://www.youtube.com/embed/Dqf0QgZLeuM'
    },
    {
        thumbnailSrc: 'http://placekitten.com/200/300',
        title: 'Do or Die CastMeComp',
        youtubeSrc: 'https://www.youtube.com/embed/IRTh4F4kw1U'
    },
    {
        thumbnailSrc: 'http://placekitten.com/100/100',
        title: 'Showreel 2021',
        youtubeSrc: 'https://www.youtube.com/embed/Dqf0QgZLeuM'
    },
    {
        thumbnailSrc: 'http://placekitten.com/100/100',
        title: 'Showreel 2021',
        youtubeSrc: 'https://www.youtube.com/embed/Dqf0QgZLeuM'
    }
]

const videoPlayer = document.getElementById('videoPlayer-media')
const library = document.querySelector('.film_library_body')

filmData.forEach(film => {
    const item = document.createElement('div')
    item.classList.add('film_library_item')

    const image = document.createElement('img')
    image.classList.add('film_library_item_img')
    image.setAttribute('src', film.thumbnailSrc)
    image.setAttribute('alt', film.title)

    const title = document.createElement('p')
    title.classList.add('film_library_item_title')
    title.textContent = film.title

    item.append(image, title)
    item.addEventListener('click', () => {
        videoPlayer.setAttribute('src', film.youtubeSrc)
    })

    library.append(item)
})
