import React from 'react';
import api from './api'
import Results from './results'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search_lon: '', search_lat: '', radius: '', apiResponse: '' };
      }
  
      handleChange(event) {
          this.setState({...this.state, [event.target.id]: event.target.value});
          console.log(`Last API response: ${this.state.temp_response}`);
      }

      searchQuery(event) {
        event.preventDefault();

        function validateInput(input) {
            // determine if the input is valid
            if (input.hasOwnProperty('search_lon') && input.hasOwnProperty('search_lat') && input.hasOwnProperty('radius')) {
                // 0 < radius <= 40075
                if (input.radius <= 0 || input.radius > 40075) {
                    return false;
                }

                // -180 <= lon <= 180
                if (input.search_lon > 180 || input.search_lon < -180) {
                    return false;
                }

                // -90 <= lat <= 90
                if (input.search_lat > 90 || input.search_lat < -90) {
                    return false;
                }

                // all conditions checked, therefore it is valid
                return true;
            }
            // failed to have the required params, therefore it is invalid
            return false;
        }

        if (validateInput(this.state)) {
            let lon = this.state.search_lon;
            let lat = this.state.search_lat;
            // NOTE: Backend is doing conversion to meters, do not handle it here
            // This could cause errors in the future
            let radius = this.state.radius;
            
            fetch(api + `search?lon=${lon}&lat=${lat}&radius=${radius}`)
            .then(res => res.json())
            // extract usernames out of json response to plain array
            .then(res => this.setState({...this.state, apiResponse: res.map(element => element['username'])}));
        }
      }
  
      render() {
        return (
            <div>
                <div>
                    <form onSubmit={e => this.searchQuery(e)}>
                        <p>lon: </p> <input id="search_lon" type="text" value={this.state.search_lon} onChange={e => this.handleChange(e)}></input>
                        <p>lat: </p> <input id="search_lat" type="text" value={this.state.search_lat} onChange={e => this.handleChange(e)}></input>
                        <p>radius: </p> <input id="radius" type="text" value={this.state.radius} onChange={e => this.handleChange(e)}></input>
                        <input type="submit" value="Search"></input>
                    </form>
                </div>
                <h1>Users found:</h1>
                <Results searchResults={this.state.apiResponse}></Results>
            </div>
        );
      }
}


export default Search;

