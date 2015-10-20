// Import modules
var React        = require('react/addons');
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var _            = require('common.utils');
var Promise      = require('bluebird');
var assert       = require('assert');
var Reflux       = require('reflux');

// Import children components

/**
 * React component class definition
 */
var App = React.createClass({

  /**
   * Describe types of properties that can be passed in
   * @type {Object}
   */
  propTypes: {
  },

  /**
   * Describe what the component should look like
   * @return {Object} React virtual DOM object
   */
  render() {

    // JSX
    return (

      <div className="app">

        <RouteHandler />

        <div className="ss">
          <a className="ss-mail social" href="mailto:thomasloh.sf@gmail.com"></a>
          <a className="ss-linkedin social" href="https://www.linkedin.com/in/lohthomas" target="_blank"></a>
          <a className="ss-twitter social" href="https://twitter.com/thomas_loh" target="_blank"></a>
          <a className="ss-octocat social" href="https://github.com/thomasloh" target="_blank"></a>
          <div className="clearfix"></div>
        </div>

      </div>
    );

  }

});

module.exports = App;
