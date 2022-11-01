import React from 'react';
import addAPI from './api'


class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lon: '', lat: '', username: '' };
      }
  
      handleChange(event) {
          this.setState({...this.state, [event.target.name]: event.target.value})
      }

      insertUser(event) {
        fetch(addAPI, {lon: this.state.lon, lat: this.state.lat, username: this.state.username})
        .then(res => console.log(`Successfully inserted user ${this.state.username}`));
      }
  
      render() {
        return (
          <div>
            <form onSubmit={this.insertUser}>
                <p>lon: </p> <input id="user_lat" type="text" value={this.state.lat} onChange={this.handleChange}></input>
                <p>lat: </p> <input id="user_lon" type="text" value={this.state.lon} onChange={this.handleChange}></input>
                <p>username: </p> <input id="username" type="text" value={this.state.username} onChange={this.handleChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
          </div>
          
        );
      }
}


export default AddUser;

