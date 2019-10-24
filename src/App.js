import React, { Component } from 'react';
import './App.css';

import Title from './components/Title/Title';
import Text from './components/Text/Text';

import {ReactComponent as Image} from './assets/images/chuck-norris.svg';

class App extends Component {

  constructor(){
    super()

    this.state = {
      quote: ''
    }
  }

  componentDidMount(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => this.setState({quote: data.value}))
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">

      <Title/>
      <Text state={this.state.quote}/>
      <Image/>

      </header>
    </div>
  );
}
}

export default App;