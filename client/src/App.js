import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailLaptop from './components/laptop/detailLaptop';
import HomePage from './containers/user/homePage';
import AdminHomePage from './containers/admin/adminHomePage';
import LoginPage from './containers/user/loginPage';
import SignUpPage from './containers/user/signUpPage';
function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={() => <HomePage />} />
                    <Route exact path="/detailLaptop/:id" component={() => <DetailLaptop />} />
                    <Route exact path="/admin" component={() => <AdminHomePage />} />
                    <Route exact path="/login" component={() => <LoginPage/>} />
                    <Route exact path="/signUp" component={() => <SignUpPage/>} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
