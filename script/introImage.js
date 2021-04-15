const mainImg = document.querySelector('.intro_img')
const headshotData = [
    'yellowHeadshot',
    'blackHeadshot',
    'blueHeadshot',
    'grayHeadshot',
    'greenHeadshot',
    'sleevelessHeadshot',
    'whiteHeadshot'
]
let count = 0

mainImg.addEventListener('click', () => location.assign('media.html'))

setInterval(() => {
    mainImg.style.opacity = '0'
    count = count + 1 < headshotData.length ? count + 1 : 0
    setTimeout(() => {
        mainImg.setAttribute('src', `images/${headshotData[count]}.jpeg`)
        mainImg.style.opacity = '1'
    }, 1250)
}, 10000)