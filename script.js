// PSEUDO-CODE (JS):
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

const formElement = document.querySelector('form');
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputElement = document.querySelector('input')
    const playerSubmission = inputElement.value;
    console.log(playerSubmission);
    inputElement.value= "";
});




const pokeApp = {}

pokeApp.endpoint = 'https://pokeapi.co/api/v2/pokemon-form/';

pokeApp.init = () => {
    pokeApp.getPokemon();
}

pokeApp.getPokemon = () => {

    //for below variable, need to include '/number' for Pokemon #
    const pokemonUrl = new URL(`${pokeApp.endpoint}`);
    
    pokemonUrl.search = new URLSearchParams({
        limit: 100000,
        //any additional parameters (ie: generation, version)
    })

    fetch(pokemonUrl)
        .then( (response) => {
            return response.json();
        })
        .then( (jsonData) => {
            pokeApp.displayImages(jsonData.results[35]);
            
        })
}


pokeApp.displayImages = (result) => {
    console.log(result);
}

pokeApp.init();