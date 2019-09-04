import React, { Component } from 'react';

import countries from './api/countries';
import { SearchBar, Card } from './components';

import './App.css'

class App extends Component {

  state = {
    data: [],
    currentCountry: {},
  }

  getDataFromApi = async (query) => {
    const response = await countries.get(query);
    this.setState({ data: response.data });
  }

  handleChange = selectedOption => {
    this.setState({ currentCountry: selectedOption.value });
  };

  componentDidMount() {
    this.getDataFromApi('all');
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Countries Api</h1>
        <SearchBar
          data={this.state.data}
          handleChange={this.handleChange}
          currentCountry={this.state.currentCountry}
        />
        <Card currentCountry={this.state.currentCountry} />
      </div>
    );
  }
}

export default App;