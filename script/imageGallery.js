const galleryContainer = document.querySelector('.gallery_imagesContainer')

fetch('../content/media.json')
    .then(response => response.json())
    .then(data => {
        data.imageGallery.forEach(image => {
            const newContainer = document.createElement('div')
            const newImage = document.createElement('img')
            
            newImage.setAttribute('src', image.src)
            newImage.setAttribute('alt', image.desc)

            newContainer.classList.add('gallery_img')
            newContainer.append(newImage)
            newContainer.addEventListener('click', () => showImage(image), {passive: true})

            galleryContainer.append(newContainer)
        })
    })

const popUpClose = document.querySelector('.popUp_close')
const popUpContainer = document.querySelector('.popUpContainer')
const popUpImg = document.querySelector('.popUp_img')
const popUpDesc = document.querySelector('.popUp_text')
const popUpCopy = document.querySelector('.copyright_name')

function showImage(image) {
    popUpImg.setAttribute('src', image.src)
    popUpImg.setAttribute('alt', image.desc)
    popUpDesc.textContent = image.desc
    popUpCopy.textContent = image.copy
    popUpContainer.style.display = 'block'
}

popUpClose.addEventListener('click', () => {
    popUpContainer.style.display = 'none'
}, {passive: true})