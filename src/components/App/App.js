import { Component } from 'react';
import './App.css';
import fetchData from './APIcalls';
import AllTricks from './AllTricks';

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

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <AllTricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;