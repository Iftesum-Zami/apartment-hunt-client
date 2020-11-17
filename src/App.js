import { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MyRent from './Components/Dashboard/MyRent/MyRent';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import Booking from './Components/Dashboard/Booking/Booking';
import Apartment from './Components/Apartment/Apartment/Apartment';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/apartment">
            <Apartment></Apartment>
          </PrivateRoute>

          <PrivateRoute path="/dash">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/booking">
            <Booking />
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <AddAdmin />
          </PrivateRoute>

          <PrivateRoute path="/addHouse">
            <AddHouse />
          </PrivateRoute>

          <PrivateRoute path="/myRent">
            <MyRent />
          </PrivateRoute>

          <Route path="*">
            <NoMatch />
          </Route> 
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
