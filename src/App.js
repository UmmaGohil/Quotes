import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';

class App extends Component {
  state = {
    quote: '',
    author: ''
  }

  componentDidMount = () => {
  const url = `https://talaikis.com/api/quotes/random/`;
  fetch(url)
  .then(response => response.json())
  .then(data =>
     this.setState({
       quote: data.quote,
       author: data.author
     })
   )
   .catch(error => console.log("error", error))
  }

  render() {
    return (
      <div className="App">
          <Quotes
         quote={this.state.quote}
         author={this.state.author}
         newQuote={this.componentDidMount} />
      </div>
    );
  }
}

export default App;
