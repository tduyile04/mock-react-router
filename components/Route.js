import React from 'react';
import PropTypes from 'prop-types';
import matchPath from '../utils/matchPath';
import { register, unregister } from '../utils/register';

class Route extends React.Component {

  componentWillMount() {
    addEventListener('popstate', this.handlePop);
    register(this);
  }

  componentWillUnmount() {
    unregister(this);
    removerEventListener('popstate', this.handlePop);
  }

  handlePop = () => {
    this.forceUpdate();
  }

  render() {
    const {
      path,
      exact,
      component,
      render
    } = this.props;

    const match = matchPath(
      location.pathname, //global DOM variable
      { path, exact }
    );

    if(!match) {
      // Do nothing if the current location
      // does not match the path prop
      return null;
    }

    if (component) {
      // The component prop takes precedent over
      // the render method. If the current location
      // matches the prop path, create a new element
      // passing in match as the props.

      return React.createElement(component, { match });
    }

    if (render) {
      // If there's a match but component was undefined
      // invoke the render prop passing in match as
      // argument

      return render({ match })
    }

    return null;

  }
}

Route.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  component: PropTypes.func,
  render; PropTypes.func
};

export default Route;
