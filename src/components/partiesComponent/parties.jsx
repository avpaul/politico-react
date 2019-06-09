import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './parties.scss';

const renderParties = parties => parties.map(party => (
  <div className="card card-candidate card-stacked-left" key={party.id}>
    <div className="card-img">
      <img src={party.logo} alt="" />
    </div>
    <div className="card-content">
      <button className="btn btn-icon btn-extend-card" type="button">
        <i className="zmdi zmdi-open-in-new icon" />
      </button>
      <h3 className="card-title">{party.name}</h3>
      <div className="card-body">
        <p className="candidate-achievement">
          <i className="zmdi zmdi-accounts icon" />
            &nbsp;
          {party.totalMembers}
            &nbsp; Members
        </p>
        <p className="candidate-biography">{party.description}</p>
      </div>
      <div className="card-action">
        <button className="btn btn-vote" type="button">
            join
        </button>
      </div>
    </div>
  </div>
));

const Parties = ({ parties }) => (
  <div className="main-content main-content-parties">
    <div className="candidates-header">
      <i className="zmdi zmdi-flag icon" />
      Know the parties
    </div>
    <div className="card-group">{renderParties(parties)}</div>
  </div>
);

Parties.propTypes = {
  user: propTypes.objectOf(propTypes.any).isRequired,
  parties: propTypes.arrayOf(propTypes.object).isRequired,
};

function mapStateToProps({ parties, user }) {
  return {
    parties,
    user,
  };
}

export default connect(mapStateToProps)(Parties);
