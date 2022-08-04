import { BASE_URL } from "./base_url"
import getMoreInfoAboutPokemon from "./getMoreInfoAboutPokemon"

export const getPokemons = () => {

    return fetch(BASE_URL)
    .then(res => res.json())
    .then((res) => {
        return Promise.all(
            res.results.map(({url}) => getMoreInfoAboutPokemon(url))
        )
    });
}