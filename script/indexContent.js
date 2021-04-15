const aboutContentContainer = document.querySelector('.about_body')
const currentlyAppearingContainer = document.querySelector('.projects_current')

fetch('../content/home.json')
    .then(response => response.json())
    .then(data => {
        aboutContentContainer.textContent = data.aboutBody
        currentlyAppearingContainer.textContent = data.currentlyAppearing
        console.log(data.recentJobs)
    })