import { BASE_URL } from "./base_url"
import getMoreInfoAboutPokemon from "./getMoreInfoAboutPokemon"

export const getPokemons = ({limit, page}) => {
    
    const url = `${BASE_URL}?limit=${limit}&offset=${page * limit}`
    return fetch(url)

    .then(res => res.json())
    .then((res) => {
        return Promise.all(
            res.results.map(({url}) => getMoreInfoAboutPokemon(url))
        )
    });
}