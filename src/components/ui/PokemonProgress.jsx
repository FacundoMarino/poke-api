import React from 'react';

const PokemonProgress = ({ value }) => {
    return (
        <div>
            <div
            className='progress-quentity'
            style={{width: `${(value * 100) / 255}%`}}>

            </div>
        </div>
    );
}

export default PokemonProgress;
