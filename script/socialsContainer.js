const twitterBtn = document.querySelector('#socialBtn-twitter')
const instagramBtn = document.querySelector('#socialBtn-instagram')
const spotlightBtn = document.querySelector('#socialBtn-spotlight')
const projectsSpotlightBtn = document.querySelector('.projects_spotlightBtn')
const socialButtons = [
    {
        btn: twitterBtn, 
        site: 'https://twitter.com/IsobellePippin'
    },
    {
        btn: instagramBtn, 
        site: 'https://www.instagram.com/isobellepippin/'
    },
    {
        btn: spotlightBtn, 
        site: 'https://www.spotlight.com/1110-5640-4689'
    },
    {
        btn: projectsSpotlightBtn,
        site: 'https://www.spotlight.com/1110-5640-4689'
    }
]

socialButtons.forEach(link => {
    link.btn.addEventListener('click', () => window.open(link.site), {passive: true})
})
