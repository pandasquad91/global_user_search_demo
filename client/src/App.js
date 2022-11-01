import './App.css';
import React from 'react';
import Search from './search'
import AddUser from './add_user'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Add user</h1>
            <AddUser></AddUser>
            
            <h1>Search for users</h1>
            <Search></Search>
          </header>
        </div>
      );
    }
}


export default App;

