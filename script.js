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

    





const pokeApp = {}

pokeApp.firstEndpoint = 'https://pokeapi.co/api/v2/pokemon-form/';

pokeApp.init = () => {
    pokeApp.getPokemon();
}

pokeApp.getPokemon = () => {

    //for below variable, need to include '/number' for Pokemon #
    const pokemonFirstUrl = new URL(`${pokeApp.firstEndpoint}`);
    
    pokemonFirstUrl.search = new URLSearchParams({
        limit: 10000,
        //any additional parameters (ie: generation, version)
    })

    fetch(pokemonFirstUrl)
        .then( (response) => response.json() )
        .then( (jsonData) => {
            pokeApp.displayImages(jsonData);
            const randomNumber = pokeApp.randomizer(jsonData.results.length);
            const secondEndpoint = `https://pokeapi.co/api/v2/pokemon-form/${randomNumber}`;
            
            //Pulling API request with randomized pokemon ID
            const pokemonSecondUrl = new URL(`${secondEndpoint}`);
    
            pokemonSecondUrl.search = new URLSearchParams({
                limit: 10000,
            })

            fetch(pokemonSecondUrl)
                .then( (secondResponse) => secondResponse.json() )
                .then( (secondJsonData) => {
                    
            });
        //any additional parameters (ie: generation, version)
    })

}


pokeApp.displayImages = (result) => {
    console.log(result);
}

pokeApp.randomizer = (maxNum) => {
    return Math.floor(Math.random()*maxNum);
}

pokeApp.init();