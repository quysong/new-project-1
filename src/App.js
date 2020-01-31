import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Blog from './Components/Pages/Blog';
import BlogDetail from './Components/Pages/BlogDetail';
import ErrorBoundary from './Components/Pages/ErrorBoundary';

function App() {
  const obj = {
    a:1,
    b:2,
  }
  const func1 = (params1, params2) => {
    console.log('object params1 :', params1);
    console.log('object params2 :', params2);
  }
  const func2 = (abc) =>{
    console.log('abc :', abc);
  }
  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          </Route>
          <Route path="/about">
            <ErrorBoundary>
              <About/>
            </ErrorBoundary>
          </Route>
          <Route exact path="/blog">
            <ErrorBoundary>
              <Blog/>
            </ErrorBoundary>
          </Route>
          <Route path="/blog/:id">
            <BlogDetail/>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
