export default {
    pokemonUrl: (value) => `https://pokeapi.co/api/v2/pokemon/${value}/`,
    speciesUrl: (value) => `https://pokeapi.co/api/v2/pokemon-species/${value}/`,
    newUser: (value) => `${console.log(value)}`,
    checkUser: (value) => `${console.log(value)}`
}