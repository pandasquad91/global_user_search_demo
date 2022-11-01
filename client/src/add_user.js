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
            // determine if the input is valid
            if (input.hasOwnProperty('user_lon') && input.hasOwnProperty('user_lat') && input.hasOwnProperty('username')) {
                // 0 < username.length <= 1000
                if (input.username.length <= 0 || input.username.length > 1000) {
                    return false;
                }

                // -180 <= lon <= 180
                if (input.user_lon > 180 || input.user_lon < -180) {
                    return false;
                }

                // -90 <= lat <= 90
                if (input.user_lat > 90 || input.user_lat < -90) {
                    return false;
                }

                // all conditions checked, therefore it is valid
                return true;
            }
            // failed to have the required params, therefore it is invalid
            return false;
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

