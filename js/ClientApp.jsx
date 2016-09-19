const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')
const Main = require('./Main')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

/* stateless component */
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
  )

ReactDOM.render(<App />, document.getElementById('app'))
