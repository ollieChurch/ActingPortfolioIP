const aboutContentContainer = document.querySelector('.about_body')

fetch('../content/about.json')
    .then(response => response.json())
    .then(data => {
        aboutContentContainer.textContent = data.aboutBody
    })