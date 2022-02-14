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
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider >
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
            <PrivateRoute path="/book-order">
              <BookOrder />
            </PrivateRoute>
            <Route path="/all-watches">
              <AllProducts />
            </Route>

            {/* User Panel Routes */}
            <PrivateRoute path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/make-review">
              <MakeReview />
            </PrivateRoute>
            <PrivateRoute path="/make-payment">
              <MakePayment />
            </PrivateRoute>
            <PrivateRoute path="/place-order">
              <PlaceOrder />
            </PrivateRoute>

            {/* Admin Panel Routes */}
            <PrivateRoute path="/manage-all-orders">
              <ManageAllOrders />
            </PrivateRoute>
            <PrivateRoute path="/manage-products">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/add-product">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/make-admin">
              <MakeAdmin />
            </PrivateRoute>

            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
