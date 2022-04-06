import React from 'react';

const TrickCard = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <h2>Name: {name}</h2>
      <h2>Obstacle: {obstacle}</h2>
      <h2>Link to tutorial: {tutorial}</h2>
    </div>
  )
}

export default TrickCard;