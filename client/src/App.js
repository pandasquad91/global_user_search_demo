import './App.css';
import React from 'react';
import Results from './results'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { apiResponse: {} };
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Add user</h1>
            
            <h1>Search for users</h1>

            <h1>Users found:</h1>
            <Results searchResults={this.state.apiResponse}></Results>
          </header>
        </div>
      );
    }
}


export default App;

