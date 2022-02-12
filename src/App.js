import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">

          </Route>
          <Route path="/register">

          </Route>
          <Route path="/book-order">

          </Route>
          <Route path="/my-orders">

          </Route>
          <Route path="/all-orders">

          </Route>
          <Route path="/all-watches">

          </Route>
          <Route path="/make-review">

          </Route>
          <Route path="/make-payment">

          </Route>
          <Route path="/our-blog">

          </Route>
          <Route path="/about-us">

          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
