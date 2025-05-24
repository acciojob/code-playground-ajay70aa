import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Home from './Home';
import CodePlayground from './CodePlayground';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="main-container">
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/login">Login</Link> |{' '}
          <Link to="/code-playground">Code Playground</Link> |{' '}
          {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
          <p>Status: {isAuthenticated ? 'Logged In' : 'Logged Out'}</p>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} setAuth={setIsAuthenticated} />
            )}
          />
          <PrivateRoute
            path="/code-playground"
            component={CodePlayground}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
