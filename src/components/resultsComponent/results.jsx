import React, { Component } from 'react';
import ResultCard from './resultCard';
import './results.scss';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elections: [1, 2, 3, 4],
    };
  }

  render() {
    const { elections } = this.state;
    return (
      <div>
        <div className="main-content main-content-results">
          <div className="candidates-header">
            <i className="zmdi zmdi-format-list-numbered icon" />
            Election results
          </div>
          <div className="card-group">
            {elections.map((e, i) => (
              <ResultCard key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
