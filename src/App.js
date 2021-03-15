import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

import { UserContextProvider } from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Menus from './pages/Menus';
import CartOrder from './pages/CartOrder';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import IncomeTransaction from './pages/IncomeTransaction';
import ProfilePartner from './pages/ProfilePartner';
import EditProfilePartner from './pages/EditProfilePartner';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <CartContextProvider>
      <UserContextProvider>
        <Router>
          <div className="bg-yellow">
            <Navbar />
          </div>
          <Switch>
            <Route path="/menus/:id">
              <Menus />
            </Route>
            <Route path="/cart-order">
              <CartOrder />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/edit-profile">
              <EditProfile />
            </Route>
            <Route path="/income-transaction">
              <IncomeTransaction />
            </Route>
            <Route path="/profile-partner">
              <ProfilePartner />
            </Route>
            <Route path="/edit-profile-partner">
              <EditProfilePartner />
            </Route>
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App;
