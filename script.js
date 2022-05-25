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






const pokeApp = {}

pokeApp.countEndpoint = 'https://pokeapi.co/api/v2/pokemon-form/';

pokeApp.init = () => {
    pokeApp.getCountEndpoint();
    // pokeApp.getPokemon();
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
            pokeApp.maxCount = jsonData.count;
            const randomNumber = pokeApp.randomizer(pokeApp.maxCount);
            // console.log(`https://pokeapi.co/api/v2/pokemon-form/${randomNumber}`);
            pokeApp.getPokemon(randomNumber);
        });
}


pokeApp.getPokemon = (pokemonId) => {
    const individualPokemonUrl = new URL(`${pokeApp.countEndpoint}${pokemonId}`);
    // individualPokemonUrl.search = new URLSearchParams({
    //     limit: 10000,
    // WHEN TRYING TO ADD PARAMETERS FOR THE VERSIONS,  ADD HERE
    // })

    fetch(individualPokemonUrl)
        .then(response => response.json())
        .then((jsonData) => {
            console.log(jsonData);
            pokeApp.displayName(jsonData.name);
            pokeApp.displayImages(jsonData.sprites.front_default);
            console.log(pokeApp.displayName);
            console.log(pokeApp.displayImages);
        });
        //any additional parameters (ie: generation, version)

}


pokeApp.displayName = (result) =>{
    console.log(result);
}


pokeApp.displayImages = (result) => {
    console.log(result);
}

pokeApp.randomizer = (maxNum) => {
    return Math.floor(Math.random()*maxNum);
}

pokeApp.init();
