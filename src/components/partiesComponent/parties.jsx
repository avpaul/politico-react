import React, { Component } from 'react';
import './parties.scss';

export default class Parties extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main-content main-content-parties">
          <div className="candidates-header">
            <i className="zmdi zmdi-flag icon" />
            Know the parties
          </div>
          <div className="card-group">
            <div className="card card-candidate card-stacked-left">
              <div className="card-img">
                <img src="https://i.imgur.com/OpBz2Th.png" alt="" />
              </div>
              <div className="card-content">
                <button className="btn btn-icon btn-extend-card" type="button">
                  <i className="zmdi zmdi-open-in-new icon" />
                </button>
                <h3 className="card-title">party name</h3>
                <div className="card-body">
                  <p className="candidate-achievement">
                    <i className="zmdi zmdi-accounts icon" />
                    &nbsp;230 Members
                  </p>
                  <p className="candidate-biography">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth...
                  </p>
                </div>
                <div className="card-action">
                  <button className="btn btn-vote" type="button">
                    join
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-candidate card-stacked-left">
              <div className="card-img">
                <img
                  src="https://img.huffingtonpost.com/asset/5a5599e81c00003d9268f90b.png?ops=scalefit_820_noupscale"
                  alt=""
                />
              </div>
              <div className="card-content">
                <button className="btn btn-icon btn-extend-card" type="button">
                  <i className="zmdi zmdi-open-in-new icon" />
                </button>
                <h3 className="card-title">party name</h3>
                <div className="card-body">
                  <p className="candidate-achievement">
                    <i className="zmdi zmdi-accounts icon" />
                    &nbsp;342 Members
                  </p>
                  <p className="candidate-biography">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth...
                  </p>
                </div>
                <div className="card-action">
                  <button className="btn btn-vote" type="button">
                    join
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
