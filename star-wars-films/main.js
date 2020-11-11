import { films } from '../data/films.js'
import { people } from '../data/people.js'


/* NAV BAR BUTTONS */

const nav = document.querySelector('nav')

const starshipsButton = document.createElement('button')
starshipsButton.innerHTML = '<a href="../sw-starships">STARSHIPS</a>'
nav.appendChild(starshipsButton)


const charButton = document.createElement('button')
charButton.innerHTML = '<a href="../star-wars-characters">CHARACTERS</a>'
nav.appendChild(charButton)

const filmsButton = document.createElement('button')
filmsButton.innerHTML = '<a href="../star-wars-films">FILMS</a>'
nav.appendChild(filmsButton)




/* Main */

const main = document.querySelector('main')

for (let step = 0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')  
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` 
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[step].title
    
    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    main.appendChild(figure)
    
}  




// console.log(films[0]);


// const main_title = document.querySelector('.main_title')

// console.log(main_title.textContent)

// main_title.textContent = "Yessi Raya's Awesome Star Wars API Page"


// goes from top to bottom...hierarchy 
// const filmList = document.querySelector('.filmList')

// films.forEach(element => {
//     console.log(element.title);
//     filmList.textContent = element.title

// })

