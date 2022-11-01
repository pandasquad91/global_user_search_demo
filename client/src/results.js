import React from 'react';


class Results extends React.Component {
    constructor(props) {
      super(props);
      this.state = { searchResults: {} };
    }

    // If there are results, render them
    // Otherwise, just say there's nothing
    render() {
      if (this.props.searchResults == null || this.props.searchResults == {} || this.props.searchResults == []) {
        <div>
            <p>No results found.</p>
        </div>
      } else {
        <div>
            <ol>
                {
                    this.props.searchResults.map((result, i) => <li key={i}>{result}</li>)
                }
            </ol>
        </div>
      }
    }
}


export default Results;

