const agentCard = document.querySelector('.agent_card')

fetch('../content/contact.json')
    .then(response => response.json())
    .then(data => {
        const {agent} = data
        const name = document.createElement('p')
        const address = document.createElement('p')
        const phone = document.createElement('p')
        const email = document.createElement('p')
        const website = document.createElement('a')

        createAgentInfo(name, 'name', agent.name)
        createAgentInfo(address, 'address', agent.address)
        createAgentInfo(phone, 'phone', `Tel: ${agent.phone}`)
        createAgentInfo(email, 'email', agent.email)
        createAgentInfo(website, 'website', agent.website.display)
        website.setAttribute('href', agent.website.url)

        agentCard.append(name, address, phone, email, website)
    })

function createAgentInfo(element, info, data) {
    element.classList.add(`agent_${info}`)
    element.textContent = data
}