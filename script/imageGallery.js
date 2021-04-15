const imageData = [
    {
        src: 'yellowHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'blackHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'blueHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'grayHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'greenHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'sleevelessHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'whiteHeadshot.jpeg',
        alt: 'headshot of Isobelle Pippin',
        desc: 'Isobelle Pippin headshot',
        copy: 'Robin Savage'
    },
    {
        src: 'yellowHeadshot.jpeg',
        alt: 'a cat',
        desc: 'This is a cat 7',
        copy: 'Puss in Boots'
    },
    {
        src: 'yellowHeadshot.jpeg',
        alt: 'a cat',
        desc: 'This is a cat 8',
        copy: 'Puss in Boots'
    }
]

const galleryContainer = document.querySelector('.gallery_imagesContainer')

imageData.forEach(image => {
    const newContainer = document.createElement('div')
    const newImage = document.createElement('img')

    newImage.setAttribute('src', `images/${image.src}`)
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
    popUpImg.setAttribute('src', `images/${image.src}`)
    popUpImg.setAttribute('alt', image.alt)
    popUpDesc.textContent = image.desc
    popUpCopy.textContent = image.copy
    popUpContainer.style.display = 'block'
}

popUpClose.addEventListener('click', () => {
    popUpContainer.style.display = 'none'
}, {passive: true})