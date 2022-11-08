import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Apps from "./Topics";

import "./styles.css";
import Error404 from "./Error404";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error) {
    this.setState({ hasError: error });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h1>ERROR BOUNDARY PAGE</h1>
          <h2> PLEASE TRY AGAIN LATER</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorScreen = () => {
  throw new Error("OPPS! Museveni is still ruling uganda till death......");
};

export default function App() {
  return (
    <div className="apps">
      <Router>
        <header className="headers">
          <Link to="/" activeClassName="active">
            HOME
          </Link>
          <Link
            to="/about"
            activeClassName="active"
            style={{ marginLeft: "10px" }}
          >
            CUSTOM COUNTER HOOK
          </Link>
          <Link
            to="/topics"
            style={{ marginLeft: "10px" }}
            activeClassName="active"
          >
            REDUCER COUNTER
          </Link>
          <Link
            to="/shop"
            activeClassName="active"
            style={{ marginLeft: "10px" }}
          >
            ERROR BOUNDARY
          </Link>
          <Link to="*" activeClassName="active" style={{ marginLeft: "10px" }}>
            ERROR 404
          </Link>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <ErrorBoundary {...props}>
                  <Home {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              path="/about"
              render={(props) => (
                <ErrorBoundary {...props}>
                  <About {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              exact
              path="/topics"
              render={(props) => (
                <ErrorBoundary {...props}>
                  <Apps {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              path="/shop"
              render={(props) => (
                <ErrorBoundary {...props}>
                  <ErrorScreen {...props} />
                </ErrorBoundary>
              )}
            />
            <Route
              path="*"
              render={(props) => (
                <ErrorBoundary {...props}>
                  <Error404 {...props} />
                </ErrorBoundary>
              )}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
