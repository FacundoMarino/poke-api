import React from 'react';

const TypeBadge = ({ type }) => {
    return (
        <div className={`type-badge background-${type}`}>
            <img className='type-badge-image' src={`../../assets/${type}.png`} alt={`Logo ${type}`} />
            <span>{type}</span>
        </div>

    );
}

export default TypeBadge;
