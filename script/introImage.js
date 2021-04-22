const mainImg = document.querySelector('.intro_img')
let count = 0

fetch('../content/headshots.json')
    .then(response => response.json())
    .then(data => {
        const {headshotList} = data
        mainImg.setAttribute('src', headshotList[count].image)
        console.log(headshotList)

        if (headshotList.length > 1) {
            console.log('passed if statement')
            setInterval(() => {
                console.log('setting interval')
                mainImg.style.opacity = '0'
                count = count + 1 < headshotList.length ? count + 1 : 0
                setTimeout(() => {
                    mainImg.setAttribute('src', headshotList[count].image)
                    mainImg.style.opacity = '1'
                }, 1250)
            }, 10000)
        }
    })

mainImg.addEventListener('click', () => location.assign('media.html'))

