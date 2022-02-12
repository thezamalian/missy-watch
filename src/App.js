import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
          <Route to="/home">
            <Home />
          </Route>
          <Route to="/login">

          </Route>
          <Route to="/register">

          </Route>
          <Route to="/book-order">

          </Route>
          <Route to="/my-orders">

          </Route>
          <Route to="/all-orders">

          </Route>
          <Route to="/all-products">

          </Route>
          <Route to="/make-review">

          </Route>
          <Route to="/make-payment">

          </Route>
          <Route to="/our-blog">

          </Route>
          <Route to="/about-us">

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
