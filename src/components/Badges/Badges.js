import { Badge } from "@material-ui/core";

export default (pokemonType) => {
    switch (pokemonType) {
        case ("grd"):
            console.log('grd')
            break;
        default:
            console.log('default hit')
    }
}