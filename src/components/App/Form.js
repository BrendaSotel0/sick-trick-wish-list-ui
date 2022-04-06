import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      link: '',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitTrick = (event) => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)
  }

  render() {
    return (
      <form>
        <select name='stance' id='stance'>
          <option value='flatground'>Choose your Stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
          value={this.state.stance}
          onChange={event => this.handleChange(event)}
        </select>

        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <select name='obstacle' id='obstacle'>
          <option value='flatground'>Choose your Obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
          value={this.state.obstacle}
          onChange={event => this.handleChange(event)}
        </select>

        <input
          type='text'
          placeholder='Link to Tutorial'
          name='link'
          value={this.state.link}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitTrick(event)}>Send It!</button>
      </form>
    )
  }
}

export default Form;