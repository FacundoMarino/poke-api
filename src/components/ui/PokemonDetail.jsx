import React from "react";
import TypeBadge from "./TypeBadge";

const PokemonDetail = ({ pokemon }) => {

    return( 
        <div>
            <div>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div>
                <h1>
                    {pokemon.name} #{pokemon.id}
                </h1>
                <h2>Types</h2>
                <div>
                    {pokemon?.types?.map(type => <TypeBadge key={type} type={type} />)}
                </div>
                <div>
                    <h2>Stadistics</h2>
                    <div>
                    {pokemon?.stadistics?.map(stat => <div ket={stat.name} className="">
                        <p>
                            {stat.name.replace("-"," ")} - {stat.base.stat}
                        </p>
                    </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail;