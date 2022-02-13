import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import BookOrder from './Pages/Shared/BookOrder/BookOrder';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import MyOrders from './Pages/UserPanel/MyOrders/MyOrders';
import ManageAllOrders from './Pages/AdminPanel/ManageAllOrders/ManageAllOrders';
import AllProducts from './Pages/AllProducts/AllProducts';
import MakeReview from './Pages/UserPanel/MakeReview/MakeReview';
import MakePayment from './Pages/UserPanel/MakePayment/MakePayment';
import MakeAdmin from './Pages/AdminPanel/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/AdminPanel/ManageProducts/ManageProducts';
import AddProduct from './Pages/AdminPanel/AddProduct/AddProduct';
import PlaceOrder from './Pages/UserPanel/PlaceOrder/PlaceOrder';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AboutUs from './Pages/AboutUs/AboutUs';

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
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/book-order">
            <BookOrder />
          </Route>
          <Route path="/all-watches">
            <AllProducts />
          </Route>
          {/* User Panel Routes */}
          <Route path="/my-orders">
            <MyOrders />
          </Route>
          <Route path="/make-review">
            <MakeReview />
          </Route>
          <Route path="/make-payment">
            <MakePayment />
          </Route>
          <Route path="/place-order">
            <PlaceOrder />
          </Route>
          {/* Admin Panel Routes */}
          <Route path="/all-orders">
            <ManageAllOrders />
          </Route>
          <Route path="/manage-products">
            <ManageProducts />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/make-admin">
            <MakeAdmin />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
