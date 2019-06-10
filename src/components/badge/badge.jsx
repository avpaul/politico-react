import React, { Component } from 'react';
import propTypes from 'prop-types';
import './badge.scss';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  componentWillMount() {
    this.setState({ isActive: true });
  }

  componentDidMount() {
    const { duration = 5000 } = this.props;
    setTimeout(() => this.setState({ isActive: false }), duration);
  }

  render() {
    const { message, type = 'error' } = this.props;
    const { isActive } = this.state;
    let className = isActive ? 'badge active' : 'badge';
    className = type === 'success' ? `${className} badge-success` : className;
    const iconClassName = type === 'error' ? 'alert-triangle' : 'check';
    return (
      <div className={className}>
        <i className={`icon zmdi zmdi-${iconClassName}`} />
        &nbsp;
        <span>{message}</span>
      </div>
    );
  }
}

Badge.propTypes = {
  message: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  duration: propTypes.number,
};

Badge.defaultProps = {
  duration: 5000,
};

export default Badge;
