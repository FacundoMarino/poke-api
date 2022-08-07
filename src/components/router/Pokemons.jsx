import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPokemons } from "../../utils/getPokemons";
import Main from "../layout/Main"
import Pagination from "../ui/Pagination";
import PokemonCard from "../ui/PokemonCard";

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons({page: 1, limit: 8}).then(res => setPokemons(res))
    }, [])

    console.log(pokemons)

    return  (
        <>
            <Main>
            <div className="flex">
                {pokemons.length > 0 &&
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            </Main>
            <Pagination />
        </>
    )
}

export default Pokemons;