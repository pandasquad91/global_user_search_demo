import React from 'react';
import api from './api'
import Results from './results'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search_lon: '', search_lat: '', radius: '', apiResponse: '' };
      }
  
      handleChange(event) {
          this.setState({...this.state, [event.target.name]: event.target.value})
      }

      searchQuery(event) {
        function validateInput(input) {
            // TODO: validate input
            return true;
        }
        if (validateInput(this.state)) {
            let lon = this.state.search_lon;
            let lat = this.state.search_lat;
            let radius = this.state.radius;
            
            fetch(api + `search?lon=${lon}&lat=${lat}&radius=${radius}`)
            .then(res => res.json())
            .then(res => this.state.apiResponse = res);
        }
      }
  
      render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.searchQuery}>
                        <p>lon: </p> <input id="search_lon" type="text" value={this.state.search_lon} onChange={this.handleChange}></input>
                        <p>lat: </p> <input id="search_lat" type="text" value={this.state.search_lat} onChange={this.handleChange}></input>
                        <p>radius: </p> <input id="radius" type="text" value={this.state.radius} onChange={this.handleChange}></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <h1>Users found:</h1>
                <Results searchResults={this.state.apiResponse}></Results>
            </div>
        );
      }
}


export default Search;

