//reusable api url

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(error) {
        console.error(error)
    }
}

function loadPage() {
    getAPIData(`https://api.propublica.org/congress/v1/`).then
     //?limit=25&offset=800
     //https://pokeapi.co/api/v2/pokemon?limit=100&offset=200
    (async (data) => {
        for (const members of data.results) {
            await getAPIData(members.url).then((senateData) => {
                console.log(senateData)
                populatePokeCard(senateData)
            })
        }
    },
    )
}







const senatorGrid = document.querySelector('.senatorGrid')
const stateButton = document.querySelector('#stateButton')
const partyButton = document.querySelector('#partyButton')
const infoButton = document.querySelector('#yourInfoButton')

stateButton.addEventListener('click', () => {
    stateSort()
})


partyButton.addEventListener('click', () => {
    partySort()
})

function populateSenate(senators) {
    senators.forEach(senator => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        figImg.src = senator.imgUrl
        figCaption.textContent = senator.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        senatorGrid.appendChild(senDiv)
    })
}