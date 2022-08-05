

const PokemonCard = ({ pokemon }) => {

    return (

        <div className={`card card-${pokemon.types[0]}`}>
            <a className="card-link" href="">
                <img className="card-img" src={pokemon.img} alt={pokemon.name} />
                <h1 className="card-title">{pokemon.name}</h1>
            </a>
        </div>
    )
}


export default PokemonCard;