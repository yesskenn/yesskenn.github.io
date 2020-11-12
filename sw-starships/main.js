import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber, addStarField} from '../util/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.main')
const mainNav = document.querySelector('.mainHeader')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')


/* MENU */

/* NAV */
const starshipsButton = document.createElement('button')
starshipsButton.innerHTML = '<a href="../sw-starships">STARSHIPS</a>'
mainNav.appendChild(starshipsButton)


const charButton = document.createElement('button')
charButton.innerHTML = '<a href="../star-wars-characters">CHARACTERS</a>'
mainNav.appendChild(charButton)

const filmsButton = document.createElement('button')
filmsButton.innerHTML = '<a href="../star-wars-films">FILMS</a>'
mainNav.appendChild(filmsButton)




/* MAIN */

closeButton.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let shipName = event.target.textContent
            const foundShip = starships.find(ship => ship.name === shipName)
            populateShipView(foundShip)
        })

        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}


function populateShipView(shipData) {
   removeChildren(shipView)
    // use createElement to create new img elements
    let shipImage = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    //set their source to the url below
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    //make Shipnum act like charnum from the characters page
    shipImage.addEventListener('error', () => {
        shipImage.hidden = true
    dialog.classList.toggle('is-active')
    })
    //append the image to the shipView element
    shipView.appendChild(shipImage)
}

populateNav(starships)



addStarField(document.querySelector('body'), 1000)