import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './candidates.scss';

const renderCandidates = candidates => candidates.map(candidate => (
  <div className="card card-candidate card-stacked-left" key={candidate.id}>
    <div className="card-img">
      <img src={candidate.image} alt="" />
    </div>
    <div className="card-content">
      <button className="btn btn-icon btn-extend-card" type="button">
        <i className="zmdi zmdi-open-in-new icon" />
      </button>
      <h3 className="card-title">{`${candidate.firstName} ${candidate.firstName}`}</h3>
      <div className="card-body">
        <p className="candidate-achievement">
          <i className="zmdi zmdi-graduation-cap icon" />
            &nbsp;
          {candidate.education}
        </p>
        <p className="candidate-biography">{candidate.biography}</p>
      </div>
      <div className="card-action">
        <button className="btn btn-vote" type="button">
            vote
        </button>
      </div>
    </div>
  </div>
));

const Candidates = ({ candidates }) => (
  <div>
    <div className="main-content main-content-candidates">
      <div className="candidates-header">
        <i className="zmdi zmdi-accounts icon" />
        Who are the candidates
      </div>
      <div className="card-group">{renderCandidates(candidates)}</div>
    </div>
  </div>
);

Candidates.propTypes = {
  candidates: propTypes.arrayOf(propTypes.object).isRequired,
};

function mapStateToProps({ user, candidates }) {
  return {
    user,
    candidates,
  };
}

export default connect(mapStateToProps)(Candidates);
