import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <form>
        <select name='stance' placeholder='Choose your Stance' id='stance'>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <input
          type='text'
          placeholder='Name of Trick'
        />
        <select name='obstacle' placeholder='Choose your Obstacle' id='obstacle'>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <input
          type='text'
          placeholder='Link to Tutorial'
        />
        <button>Send It!</button>
      </form>
    )
  }
}

export default Form;