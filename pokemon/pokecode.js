//Reusable async function to fetch data from URL

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(error) {
        console.error(error)
    }
}


//now, using async getAPIData function

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then
     //?limit=25&offset=800
    (async (data) => {
        for (const pokemon of data.results) {
            await getAPIData(pokemon.url).then((pokeData) => {
                console.log(pokeData)
                populatePokeCard(pokeData)
            })
        }
    },
    )
}

const pokemonGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('button')
const newPokemonButton = document.querySelector('.newPokemon')


// to pick out specific types


newPokemonButton.addEventListener('click', () => {
    let pokemonName = prompt('What is your new Pokemon name?')
    let newPokemon = new Pokemon(
        pokemonName,
        400,
        200,
        ['eat', 'study', 'work'],
        ['poop', 'drink coffee', 'code'])
        populatePokeCard(newPokemon)
    })




loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.disabled = true
})




function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = `card-face card-face-front`
    let frontLabel = document.createElement('h2')
    let frontImage = document.createElement('img')
    frontLabel.textContent = pokemon.name
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    return cardFront
}



function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = `card-face card-face-back`
   
   
    
    let typesList = document.createElement('ul')
    pokemon.types.forEach(type => {
        let typeName = document.createElement('li')
        typeName.textContent = type.type.name
        typesList.appendChild(typeName)

        
    })
    let movesLabel = document.createElement('p')
    movesLabel.textContent = `Moves: ${pokemon.moves.length}`
    let weightLabel = document.createElement('p')
    weightLabel.textContent = `Weight: ${pokemon.weight}`

    cardBack.appendChild(movesLabel)
    cardBack.appendChild(weightLabel)
    cardBack.appendChild(typesList)
    
    return cardBack
}



function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } else if (pokemon.id > 99 && pokemon.id < 810) {
        return `$(pokemon.id)`
    }
    return `pokeball`
}



function Pokemon(name, height, weight, moves, types) {
    this.name = name
    this.height = height
    this.weight = weight
    this.moves = moves
    this.types = types
    this.id = 999

    
}



