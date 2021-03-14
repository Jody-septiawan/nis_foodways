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


function MenuRest({ match }) {
  return (
    <>
      {match.params.id}
    </>
  )
}

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
            <Route path="/cart-order/:idR">
              <CartOrder />
            </Route>
            <Route path="/profile">
              <Profile />
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
