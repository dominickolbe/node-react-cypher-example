import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      encode: '',
      userInput: localStorage.getItem('userInput') || ''
    }

    this.cipher(this.state.userInput);
  }

  async cipher(numericode = '') {

    const { data } = await axios.post('/api/cipher', { q: numericode });

    this.setState({
      encode: data
    });

    localStorage.setItem('userInput', numericode);

  }

  render() {

    const { encode, userInput } = this.state;

    return (
      <React.Fragment>
        <h1>node-react-cypher-example</h1>
        <input
          type="text"
          placeholder="tell me your secret"
          defaultValue={userInput}
          onChange={e => this.cipher(e.target.value)}
        />
        <pre>{encode}</pre>
      </React.Fragment>
    );
  }
}

export default App;
