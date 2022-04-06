import React from 'react';

const TrickCard = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <h2>Obstacle: {obstacle}</h2>
      <h2>Link to tutorial: <a href='{tutorial}'>{tutorial}</a></h2>
    </div>
  )
}

export default TrickCard;