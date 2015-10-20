
// Stylesheets
require('./main.less');

// Grab utilities
var React        = require('expose?React!react/addons');
var Router       = require('react-router');
var Routes       = Router.Routes;
var Route        = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect     = Router.Redirect;
var _            = require('../util');

// Apply es5 shim
require('es5-shim-sham');

// 3rd party


//////////
// MAIN //
//////////

// Grab app
var App     = require('app');

// Components
var Home    = require('react-proxy!app.home');

/////////////
// Routing //
/////////////

var root = "/";

var routes = (
  <Route path={ `${root}` } handler={ App }>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler params={ state.params } query={ state.query } />, global.document.body);
});

