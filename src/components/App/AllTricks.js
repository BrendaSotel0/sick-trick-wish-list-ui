import React from 'react';
import TrickCard from './TrickCard';
import './AllTricks.css';

const AllTricks = () => {
  return (
    <div className='tricks-container'>
      <TrickCard />
      <TrickCard />
      <TrickCard />
    </div>
  )
}

export default AllTricks;