import { films } from './data/films.js'
import { people } from './data/people.js'


people.forEach(person => {
    let newParagraph = document.body.appendChild(document.createElement("p"))
    newParagraph.textContent = person.name
})
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

