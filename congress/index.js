//this is the control file for the senators page
//this code contains: map, reduce
//import/export statements


//import data
import {senators} from '../data/senators.js'

import {removeChildren} from '../util/index.js'

// const for sorting buttons
const senateGrid = document.querySelector('.senateGrid')
const demButton = document.querySelector('#demButton')
const repButton = document.querySelector('#repButton')
const indButton = document.querySelector('#indButton')
const stateButton = document.querySelector('#stateButton')


//event listeners for party and state buttons
demButton.addEventListener('click', () => {
    democrats ()
})

repButton.addEventListener('click', () => {
    republicans ()
})

stateButton.addEventListener('click', () => {
    stateSort ()
})



//FRONT OF CONTACT CARD
function populateSenateGrid(senatorData) {
    removeChildren(senateGrid)
    senatorData.forEach(senator => {

    let senDiv = document.createElement('div')
    senDiv.className = 'scene'
    let senFigure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    let partyIcon = document.createElement('i')
    let senateState = document.createElement('p')
    if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
    if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
    if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
  
    
    figImg.src = senator.imgURL
    figCaption.textContent = senator.name
    senateState.textContent = `State: ${senator.state}`
    
    //CARD FRONT
    figCaption.appendChild(partyIcon)
    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senDiv.appendChild(senFigure)
    senDiv.appendChild(senateState)
    senateGrid.appendChild(senDiv)
    })
}

//MAP OF NEEDED PROPERTIES
function simpleSenators(senArray) {
    return senArray.map(senator => {
        return {
            id: senator.id,
            name: `${senator.first_name} ${senator.last_name} `,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            state: senator.state,
            address: senator.office,
            party: senator.party,
            twitter_account: senator.twitter_account,
            phone: senator.phone,
            contact_form: senator.contact_form
        }
    })
}


//aphabetical state sorting

/* f unction stateSort () {
    populateSenateGrid(simplifySenators(senators).sort((a, b), => {
         return parseInt(a.state) - parseInt(b.state);
    }))
} */


//sort by birthday EXAMPLE
/* function bdaySort () {
    populateSenateGrid(simplifySenators(senators).sort((a, b) => {
        return parseInt(a.birthday) - parseInt(b.birthday)
    }))
}
*/


//show all senators
populateSenateGrid(simpleSenators(senators))
