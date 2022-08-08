import React from 'react';
import { useState, useEffect } from "react";
import { getPokemonById } from "../../utils/getPokemonById"
import Main from "../layout/Main"
import PokemonDetail from '../ui/PokemonDetail';
import Pagination from "../ui/Pagination"

const Detail = () => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemonById({ id: 6 }).then((res) => setPokemon(res))
    }, []) 
    return (
        <div>
           <Main>
            <PokemonDetail pokemon={pokemon} />
            </Main> 
            <Pagination />
        </div>
    );
}

export default Detail;
