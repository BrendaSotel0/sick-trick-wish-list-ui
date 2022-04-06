import { Component } from 'react';
import './App.css';
import fetchData from './APIcalls';
import AllTricks from './AllTricks';
import Form from './Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [],
      error: ''
    }
  }

  componentDidMount() {
    return fetchData()
    .then((data) => this.setState({tricks: data}))
    .catch((error) => this.setState({error: `Oops! Something went wrong!`}))
  }

  addTrick = (newTrick) => {
    this.setState({tricks: [...this.state.tricks, newTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick} />
        <AllTricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;