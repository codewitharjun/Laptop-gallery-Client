import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Laptop from './Pages/Home/Laptop/Laptop';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Pages/contexts/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivetRouter from './Pages/Login/PrivetRouter/PrivetRouter';
import Details from './Pages/Home/Details/Details';
import BuyNow from './Pages/OrderBuy/BuyNow/BuyNow';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/laptops">
              <Laptop></Laptop>
            </Route>
            <PrivetRouter path="/buynaw/:productid">
              <BuyNow></BuyNow>
            </PrivetRouter>
            <Route path="/details/:productid">
              <Details></Details>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRouter path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRouter>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

// https://sheltered-badlands-24462.herokuapp.com/