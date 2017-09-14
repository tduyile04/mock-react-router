import React from 'react';
import PropTypes from 'prop-types';
import { instances, register, unregister } from '../utils/register';

class Link extends React.Component {

  const historyPush = (path) => {
    history.pushState({}, null, path);
    instances.forEach(instance => instance.forceUpdate);
  }

  const historyReplace = (path) => {
    history.replaceState({}, null, path);
    instances.forEach(instance => instance.forceUpdate);
  }

  handleClick = () => {
    const { replace, to } = this.props;
    event.preventDefault();

    //route here
    replace ? historyReplace(to) : historyPush(to);
  }

  render() {
    const { to, children } = this.props;

    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  replace: Proptypes.bool
};

export default Link;
