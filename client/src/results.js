import React from 'react';


class Results extends React.Component {
    constructor(props) {
      super(props);
      this.state = { searchResults: {} };
    }

    // If there are results, render them
    // Otherwise, just say there's nothing
    render() {
      if (this.state.searchResults == null || this.state.searchResults == {} || this.state.searchResults == []) {
        <div>
            <p>No results found.</p>
        </div>
      } else {
        <div>
            <ol>
                {
                    this.state.searchResults.map((result, i) => <li key={i}>{result}</li>)
                }
            </ol>
        </div>
      }
    }
}


export default Results;

