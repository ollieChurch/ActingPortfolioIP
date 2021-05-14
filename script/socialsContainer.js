const twitterBtn = document.querySelector('#socialBtn-twitter')
const instagramBtn = document.querySelector('#socialBtn-instagram')
const spotlightBtn = document.querySelector('#socialBtn-spotlight')
const projectsSpotlightBtn = document.querySelector('.projects_spotlightBtn')

fetch('../content/socialLinks.json')
    .then(response => response.json())
    .then(data => {
        const socialButtons = [
            {
                btn: twitterBtn, 
                site: data.twitter
            },
            {
                btn: instagramBtn, 
                site: data.instagram
            },
            {
                btn: spotlightBtn, 
                site: data.spotlight
            },
            {
                btn: projectsSpotlightBtn,
                site: data.spotlight
            }
        ]
        
        socialButtons.forEach(link => {
            if (link.btn) {
                link.btn.addEventListener('click', () => window.open(link.site), {passive: true})
            }
        })
    })
