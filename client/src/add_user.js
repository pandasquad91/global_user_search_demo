import React from 'react';
import api from './api'


class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user_lon: '', user_lat: '', username: '', statusMsg: '' };
      }
  
      handleChange(event) {
          this.setState({...this.state, [event.target.name]: event.target.value})
      }

      insertUser(event) {
        function validateInput(input) {
            // TODO: validate all the input
            return true;
        }

        if (validateInput(this.state)) {
            let lon = this.state.user_lon;
            let lat = this.state.user_lat;
            let username = this.state.username;

            let requestOptions = {
                method: 'POST',
            }

            fetch(api + `add?username=${username}&lon=${lon}&lat=${lat}`, requestOptions)
            .then(res => this.state.statusMsg = `Successfully inserted new user ${this.state.username}`);
        } else {
            this.state.statusMsg = 'Could not insert user, check input data';
        }
      }
  
      render() {
        return (
          <div>
            <form onSubmit={this.insertUser}>
                <p>lon: </p> <input id="user_lat" type="text" value={this.state.user_lat} onChange={this.handleChange}></input>
                <p>lat: </p> <input id="user_lon" type="text" value={this.state.user_lon} onChange={this.handleChange}></input>
                <p>username: </p> <input id="username" type="text" value={this.state.username} onChange={this.handleChange}></input>
                <input type="submit" value="Add"></input>
            </form>
            <p>{this.state.statusMsg}</p>
          </div>
          
        );
      }
}


export default AddUser;

