// PSEUDO-CODE (JS): 

//*****UNSURE AS TO WHETEHR OR NOT TO INCLUDE AS PART OF FINAL DELIVERABLE****

    // Landing page with a button with text "Test your Knowledge" with title "Pokemon Guessing Game"

    // Get information from PokeApi
        // Create function for randomizing number
            // Set the upper limit of random number to length of the array based on generation (ie: Gen 1 relate to Pokemon #1-151)
        // Call PokeApi
            // Get random image from PokeApi using randomizer function
            // Get name of Pokemon and store it in a variable
            // Display image on web page
    //App functionality
        //Query select the 'form' element
        //Add submit event listener
        //Conditional statement for whether the submission is equal to the Pokemon name

    
//Pseudo-code (form)
    // find the form element on the page 
    // add event listener 
    // when the form is submitted 
        // get the submission 
        // comppare submission to answer 
        // if correct add point to counter 
        // if incorrect - alert - try again

const pokeApp = {}

pokeApp.countEndpoint = 'https://pokeapi.co/api/v2/pokemon-form/';

pokeApp.init = () => {
    
    pokeApp.getCountEndpoint();
    pokeApp.setUpEventListener();
    pokeApp.reset();
    
}

pokeApp.getCountEndpoint = () => {
    const pokemonUrl = new URL(`${pokeApp.countEndpoint}`);

    pokemonUrl.search = new URLSearchParams({
        limit: 10000,
        //any additional parameters (ie: generation, version)
    })

    fetch(pokemonUrl)
        .then(response => response.json())
        .then((jsonData) => {
            //150 is the number of pokemons in the first generation
            const randomNumber = pokeApp.randomizer(150);
            pokeApp.getPokemon(randomNumber);
        });
}


pokeApp.getPokemon = (pokemonId) => {
    const individualPokemonUrl = new URL(`${pokeApp.countEndpoint}${pokemonId}`);
    // WHEN TRYING TO ADD PARAMETERS FOR THE VERSIONS IN THE FUTURE,  EXPAND HERE

    fetch(individualPokemonUrl)
        .then(response => response.json())
        .then((jsonData) => {
            pokeApp.correctName = jsonData.name;
            pokeApp.displayImages(jsonData.sprites.front_default);
        });
}


pokeApp.displayImages = (pokemon) => {
    const pokeImage= document.querySelector('#randomPokeImage')
    pokeImage.src= pokemon;
    document.querySelector('#pokemonImageDiv').appendChild(pokeImage);
}

pokeApp.randomizer = (maxNum) => {
    return Math.floor(Math.random()*maxNum+1);
}

pokeApp.setUpEventListener = () => {
    const submitElement = document.querySelector('#submit');
    submitElement.addEventListener('click', (event) => {
        event.preventDefault();
        const inputElement = document.querySelector('input')
        const playerSubmission = inputElement.value;
        
        if (playerSubmission === pokeApp.correctName) {
            inputElement.value = "";
            pokeApp.displayImages.innerHTML= '';
            pokeApp.correctName= "";
            pokeApp.getCountEndpoint();
            pokeApp.updateScore();
        } else {
            alert ("Try Again");
        };
    });
}

pokeApp.score = 0
pokeApp.scoreCounter = document.querySelector('#score')
pokeApp.updateScore = function (){
    pokeApp.score++;
    pokeApp.scoreCounter.innerHTML = pokeApp.score;
};

pokeApp.reset = () => {
    const resetElement= document.querySelector('#reset')
    resetElement.addEventListener('click', (event) => {
        event.preventDefault();
        const inputElement = document.querySelector('input')
        inputElement.value = "";
        pokeApp.displayImages.innerHTML= '';
        pokeApp.correctName= "";
        pokeApp.getCountEndpoint();
    });
};

pokeApp.init();