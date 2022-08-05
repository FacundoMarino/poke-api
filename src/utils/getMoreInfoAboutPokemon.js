
const getMoreInfoAboutPokemon = (url) => {

    return fetch(url).then(res => res.json())
    .then(({ name, id, sprites, types: typesData })=> {
        const img = sprites.other.dream_world.front_default

        const types = typesData.map(({ type }) => type.name)
        
        return { name, id, img, types }
    })
}   

export default getMoreInfoAboutPokemon;