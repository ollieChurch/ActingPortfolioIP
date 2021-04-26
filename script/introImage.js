const mainImg = document.querySelector('.intro_img')
let count = 0

fetch('../content/headshots.json')
    .then(response => response.json())
    .then(data => {
        const {headshotList} = data
        mainImg.setAttribute('src', headshotList[count].image)

        if (headshotList.length > 1) {
            setInterval(() => {
                mainImg.style.opacity = '0'
                count = count + 1 < headshotList.length ? count + 1 : 0
                setTimeout(() => {
                    mainImg.onload = () => { mainImg.style.opacity = '1' }
                    mainImg.setAttribute('src', headshotList[count].image)
                }, 1250)
            }, 10000)
        }
    })

mainImg.addEventListener('click', () => location.assign('media.html'))

