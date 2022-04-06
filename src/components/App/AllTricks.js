import React from 'react';
import TrickCard from './TrickCard';
import './AllTricks.css';

const AllTricks = ({tricks}) => {
  const trickCards = tricks.map(trick => {
    return (
      <TrickCard 
        stance={trick.strance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    )
  })
  return (
    <div className='tricks-container'>
      {trickCards}
    </div>
  )
}

export default AllTricks;