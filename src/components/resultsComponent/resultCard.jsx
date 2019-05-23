import React from 'react';

const resultCard = () => (
  <div className="result-card">
    <div className="result-winner">
      <div className="winner-profile-img">
        <img
          src="https://image.freepik.com/free-vector/face-zombie-vector-illustration_1262-4499.jpg"
          alt=""
        />
      </div>
      <div className="winner-profile-info">
        <p className="candidate-name">
          <i className="zmdi zmdi-assignment-account icon" />
            &nbsp; first lastname
        </p>
        <p className="result-office">
          <i className="zmdi zmdi-balance icon" />
            &nbsp; City Mayor
        </p>
      </div>
    </div>

    <div className="result-others">
      <div className="table-container">
        <table className="recent-votes-winners">
          <thead>
            <tr>
              <th>candidate</th>
              <th>party</th>
              <th>votes</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>james louis</td>
              <td>democrat</td>
              <td>455</td>
              <td>52.00</td>
            </tr>
            <tr>
              <td>margrethe mona</td>
              <td>republican</td>
              <td>235</td>
              <td>26.85</td>
            </tr>
            <tr>
              <td>eredith jones</td>
              <td>republican</td>
              <td>141</td>
              <td>16.11</td>
            </tr>
            <tr>
              <td>maroon smith</td>
              <td>socialists</td>
              <td>44</td>
              <td>5.02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default resultCard;
