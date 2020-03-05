import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Body from './components/Body/Body';

class App extends Component {

  state = {
    designers: [
      { name: 'Kay dhiman' },
      { name: 'Ashish Ahuja' },
      { name: 'Gurpreet Singh' }
    ]
  }

  removeDesigner = (e) => {
    let designers = this.state.designers;

    let newState = designers.filter((designer, i) => i != e.target.id);

    console.log(newState)

    this.setState(
      {
        designers: newState
      }
    );

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Body designersList={this.state.designers} click={this.removeDesigner} />
        </Router>
      </div>
    );
  }
}

export default App;
