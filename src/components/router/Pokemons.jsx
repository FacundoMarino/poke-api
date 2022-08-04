import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPokemons } from "../../utils/getPokemons";
import Main from "../layout/Main"
import Pagination from "../ui/Pagination";

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons().then(res => setPokemons(res))
    }, [])

    console.log(pokemons)

    return  (
        <>
            <Main>
            <div className="container">
                {
                pokemons.map((pokemon) => <p key={pokemon.name}>{pokemon.name}</p>)  
                }
            </div>
            </Main>
            <Pagination />
        </>
    )
}

export default Pokemons;