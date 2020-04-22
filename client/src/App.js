import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import DetailLaptopPage from './containers/user/detailLaptopPage';
import HomePage from './containers/user/homePage';
import AdminHomePage from './containers/admin/adminHomePage';
import LoginPage from './containers/user/loginPage';
import SignUpPage from './containers/user/signUpPage';

const PrivateRoute = ({component : Component, ...rest}) => (
    <Route
        {...rest}
        render = {
            props => (
                localStorage.getItem("signined") && localStorage.getItem("role") == 1
                ? <Component {...props} /> 
                : <Redirect to="/" />
            )
        }
    />
)
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={() => <HomePage />} />
                            <Route exact path="/detailLaptop/:id" component={() => <DetailLaptopPage />} />
                            <Route exact path="/login" component={() => <LoginPage/>} />
                            <Route exact path="/signUp" component={() => <SignUpPage/>} />
                            {/* admin */}
                            <PrivateRoute exact path="/admin" component={() => <AdminHomePage />} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
