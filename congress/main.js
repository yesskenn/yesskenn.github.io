import { senators } from '../data/senators.js'
import { removeChildren } from '../util/index.js'



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

function populateDOM(simpleSenators) {
    removeChildren(senatorGrid)
    simpleSenators.forEach(members => {
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

    function getSimpleSenators(senatorArray) {
        return senatorArray.map(members => {
           // let lastName = members.last_name ? `${members.last_name}` : ` `
            return {
             
                name: `${members.first_name}`
            }
        
        })
    }

    console.log(populateSsimpleSenators)