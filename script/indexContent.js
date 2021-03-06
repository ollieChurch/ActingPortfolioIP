const aboutContentContainer = document.querySelector('.about_body')
const videoPlayer = document.querySelector('.videoPlayer')
const currentlyAppearingContainer = document.querySelector('.projects_current')
const recentJobsContainer = document.querySelector('.projects_recentContainer')

fetch('../content/home.json')
    .then(response => response.json())
    .then(data => {
        const {aboutBody, currentlyAppearing, recentJobs} = data
        aboutContentContainer.textContent = aboutBody
        currentlyAppearingContainer.textContent = currentlyAppearing

        recentJobs.forEach(job => {
            const jobCard = document.createElement('div')
            jobCard.classList.add('recent_job')

            const name = document.createElement('p')
            name.classList.add('job_name')
            name.textContent = job.name
            jobCard.append(name)

            const jobInfoContainer = document.createElement('div')
            jobInfoContainer.classList.add('job_info')

            const date = createJobInfo('date', job.year)
            const type = createJobInfo('type', job.type)
            const role = createJobInfo('role', job.role)
            const company = createJobInfo('company', job.company)
            const director = createJobInfo('director', job.director)

            jobInfoContainer.append(date, type, role, company, director)
            jobCard.append(jobInfoContainer)
            recentJobsContainer.append(jobCard)
        })
    })

function createJobInfo(info, data) {
        const category = document.createElement('div')
        category.classList.add(`job_${info}`)

        const categoryLabel = document.createElement('p')
        categoryLabel.classList.add('job_info_label')
        categoryLabel.textContent = info
        
        const categoryText = document.createElement('p')
        categoryText.textContent = data

        category.append(categoryLabel, categoryText)

        return category
}

fetch('../content/media.json')
    .then(response => response.json())
    .then(data => {
        const {showreel} = data
        videoPlayer.src = showreel
    })