import React from 'react';
import './card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <p className="name">{pokemon.name}</p>
    </div>
  );
};

export default Card;