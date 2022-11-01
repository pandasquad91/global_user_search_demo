import React from 'react';
import searchAPI from './api'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lon: '', lat: '', radius: '' };
      }
  
      handleChange(event) {
          this.setState({...this.state, [event.target.name]: event.target.value})
      }

      searchQuery(event) {
        fetch(searchAPI, {lon: this.state.lon, lat: this.state.lat, radius: this.state.radius})
        .then(res => res.json())
        .then(res => this.props.apiResponse = res);
      }
  
      render() {
        return (
          <div>
            <form onSubmit={this.searchQuery}>
                <p>lon: </p> <input id="search_lat" type="text" value={this.state.lat} onChange={this.handleChange}></input>
                <p>lat: </p> <input id="search_lon" type="text" value={this.state.lon} onChange={this.handleChange}></input>
                <p>radius: </p> <input id="search_radius" type="text" value={this.state.radius} onChange={this.handleChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
          </div>
          
        );
      }
}


export default Search;

