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
          <Route path="/dash">
            <Dashboard />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/makeAdmin">
            <AddAdmin />
          </Route>
          <Route path="/addHouse">
            <AddHouse />
          </Route>
          <Route path="/myRent">
            <MyRent />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route> 
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
