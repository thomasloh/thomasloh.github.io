// Import modules
var React   = require('react/addons');
var _       = require('lodash');
var drawing = require('common.drawing');

// Import children components

/**
 * React component class definition
 */
var Home = React.createClass({

  /**
   * Describe types of properties that can be passed in
   * @type {Object}
   */
  propTypes: {
  },

  componentDidUpdate: function(prevProps, prevState) {

    drawing.splash(this.getDOMNode(), 90);

  },

  componentDidMount: function() {

    drawing.splash(this.getDOMNode(), 90);
  },

  /**
   * Describe what the component should look like
   * @return {Object} React virtual DOM object
   */
  render() {

    // JSX
    return (

      <canvas className="home" style={{height: "100%", width: "100%"}}>
      </canvas>

    );

  }

});

module.exports = Home;
