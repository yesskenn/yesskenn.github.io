//reusable api url

/*async function getAPIData(url) {
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
*/


import { senators } from '../data/senators.js'
import { removeChildren } from '../util/index.js'



const senatorGrid = document.querySelector('.senatorGrid')
//const stateButton = document.querySelector('#stateButton')
//const partyButton = document.querySelector('#partyButton')
//const infoButton = document.querySelector('#yourInfoButton')

//stateButton.addEventListener('click', () => {
//    stateSort()
//})


//partyButton.addEventListener('click', () => {
//    partySort()
//})


/* const filterSenators = (prop, value) => {
   return senators.filter(senator => {
        return senator[prop] === value
    })
} */
//const republicans = filterSenators('party, 'R')
//const democrats = filterSenators('party, 'D')


/* function populateSenatorDiv(simpleSenators) {
    removeChildren(senatorGrid)
    simpleSenators.forEach(senators => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (senators.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senators.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senators.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = senators.imgURL
        figCaption.textContent = senators.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        senatorGrid.appendChild(senDiv)
    })
}


function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senators.middle_name ? ` ${senators.middle_name}  ` : ` `
        return {
            id: senators.govtrack_id,
            name: `${senators.first_name}${middleName}${senators.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senators.govtrack_id}-200px.jpeg`,
            party: senators.party,
            state: senators.state,
            address: senators.office,
            phone: senators.phone,
            socialMedia: senators.twitter_account,
            officialContact: senators.contact_form
        }
    })
}

populateSenatorDiv(getSimplifiedSenators(senators))
console.log(senators)*/




function populateSenatorDiv(simpleSenators) {
    removeChildren(senatorGrid)
    simpleSenators.forEach(senator => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        //senDiv.appendChild(progressBars(senator))
        senatorGrid.appendChild(senDiv)
    })
}

function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middleName ? ` ${senator.middleName} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct,
            party: senator.party,
            date_of_birth: parseInt(senator.date_of_birth, 10)
        }
    })
}

const filterSenators = (prop, value) => {
    return getSimplifiedSenators(senators).filter(senator => {
        return senator[prop] === value
    })
}

const republicans = filterSenators('party', 'R')
const democrats = filterSenators('party', 'D')

const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

const missedVotes = getSimplifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

function birthdaySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.date_of_birth - b.date_of_birth
    }))
}

function senioritySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.seniority - b.seniority
    }))
}

console.log(mostSeniority, missedVotes, republicans, democrats)

populateSenatorDiv(getSimplifiedSenators(senators))