const imageData = [
    {
        src: './images/isobelleHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'http://placekitten.com/200/300',
        alt: 'a cat',
        desc: 'This is a cat',
        copy: 'Puss in Boots'
    },
    {
        src: 'http://placekitten.com/300/200',
        alt: 'a cat',
        desc: 'This is a cat 2',
        copy: 'Puss in Boots'
    },
    {
        src: 'http://placekitten.com/400/600',
        alt: 'a cat',
        desc: 'This is a cat 3',
        copy: 'Puss in Boots'
    },
    {
        src: 'http://placekitten.com/500/300',
        alt: 'a cat',
        desc: 'This is a cat 4',
        copy: 'Puss in Boots'
    },
    {
        src: 'http://placekitten.com/200/300',
        alt: 'a cat',
        desc: 'This is a cat 5',
        copy: 'Puss in Boots'
    },
    {
        src: 'http://placekitten.com/300/300',
        alt: 'a cat',
        desc: 'This is a cat 6',
        copy: 'Puss in Boots'
    },
    {
        src: 'http://placekitten.com/400/200',
        alt: 'a cat',
        desc: 'This is a cat 7',
        copy: 'Puss in Boots'
    },
    {
        src: 'http://placekitten.com/400/400',
        alt: 'a cat',
        desc: 'This is a cat 8',
        copy: 'Puss in Boots'
    }
]

const galleryContainer = document.querySelector('.gallery_imagesContainer')

imageData.forEach(image => {
    const newContainer = document.createElement('div')
    const newImage = document.createElement('img')

    newImage.setAttribute('src', image.src)
    newImage.setAttribute('alt', image.alt)

    newContainer.classList.add('gallery_img')
    newContainer.append(newImage)
    newContainer.addEventListener('click', () => showImage(image), {passive: true})

    galleryContainer.append(newContainer)
})

const popUpClose = document.querySelector('.popUp_close')
const popUpContainer = document.querySelector('.popUpContainer')
const popUpImg = document.querySelector('.popUp_img')
const popUpDesc = document.querySelector('.popUp_text')
const popUpCopy = document.querySelector('.copyright_name')

function showImage(image) {
    popUpImg.setAttribute('src', image.src)
    popUpImg.setAttribute('alt', image.alt)
    popUpDesc.textContent = image.desc
    popUpCopy.textContent = image.copy
    popUpContainer.style.display = 'block'
}

popUpClose.addEventListener('click', () => {
    popUpContainer.style.display = 'none'
}, {passive: true})