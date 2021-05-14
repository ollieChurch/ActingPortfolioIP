const productsContainer = document.querySelector('.maxwellMysteries_products')

fetch('../content/creativeProjects.json')
    .then(response => response.json())
    .then(data => {
        data.maxwellMysteries.forEach(product => {
            const newContainer = document.createElement('div')
            newContainer.classList.add('product')

            const title = document.createElement('h3')
            title.classList.add('product_title')
            title.textContent = product.gameTitle

            const categoryBadge = document.createElement('span')
            categoryBadge.classList.add('product_gameTypeBadge', 'gameType_highlight')
            categoryBadge.textContent = `'${product.gameCategory}'`

            const media = product.useVideoTrailer ? document.createElement('iframe') : document.createElement('img')
            const mediaSrc = product.useVideoTrailer ? product.videoSrc : product.src
            product.useVideoTrailer && media.classList.add('videoPlayer')
            media.setAttribute('width', '100%')
            media.setAttribute('height', '315')
            media.setAttribute('src', mediaSrc)
            if (product.useVideoTrailer) {
                media.setAttribute('title', 'YouTube video player')
                media.setAttribute('frameborder', '0')
                media.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
                media.setAttribute('allowfullscreen', true)
            } 

            if (!product.gameInDevelopment) {
                const story = document.createElement('p')
                story.classList.add('product_story')
                story.textContent = product.gameStory

                const description = document.createElement('p')
                description.classList.add('product_description')
                description.textContent = product.gameDescription
            
                const requirementsHeading = document.createElement('p')
                requirementsHeading.classList.add('product_requirements_heading')
                requirementsHeading.textContent = 'What You Need:'
                const requirementsList = document.createElement('ul')
                requirementsList.classList.add('product_requirements_list')
                product.requirementsList.forEach(item => {
                    const newListItem = document.createElement('li')
                    newListItem.textContent = item.requirement
                    requirementsList.append(newListItem)
                })
                
                const finalLine = document.createElement('p')
                finalLine.textContent = 'Play as a team or take on the case as a lone detective. The choice is yours.'

                const price = document.createElement('h4')
                price.classList.add('product_price')
                price.textContent = `Hours of fun for just £${product.price}`

                if (product.productID) {
                    const buyBtn = document.createElement('div')
                    buyBtn.classList.add('pp-product-widget-container')
                    buyBtn.setAttribute('data-product', product.productID)
                    buyBtn.setAttribute('data-show', 'button')
                    buyBtn.setAttribute('data-button-label', 'Buy It Now!')
                    buyBtn.setAttribute('data-button-classes', 'product_btn')
                }
            } else {
                const developmentText = document.createElement('p')
                developmentText.classList.add('product_story')
                developmentText.textContent = 'This game is currently in development'
            }
            

            newContainer.append(
                title, 
                categoryBadge, 
                media
            )

            if (!product.gameInDevelopment) {
                newContainer.append(
                    story, 
                    description, 
                    requirementsHeading, 
                    requirementsList,
                    finalLine,
                    price,
                    buyBtn
                )
            } else {
                newContainer.append(developmentText)
            }

            productsContainer.append(newContainer)
        })
    })