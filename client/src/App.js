import React, { Component } from "react";

import "./app.scss"; //Give page black back ground

import { Content } from "carbon-components-react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/Home/home-page";
import AboutPage from "./content/About Us/about-us";
import ContactPage from "./content/Contact/contact-page";
import SocialPage from "./content/Social/social-page";
import OpportunityPage from "./content/Opportunities/opportunity-page";
import ServeFooter from "./components/Footer/footer";
import ServeHeader from "./components/Header/header"
import Login from './components/Login'
import Register from './components/Register'
import Profile from './content/Profile/profile'
import RegisterOrg from './components/RegisterOrg'
import OrgProfile from './components/OrgProfile'
import OrgLogin from './components/OrgLogin'




class App extends Component {
  render() {
    return (
        <>

      <ServeHeader />
          <Content>
              <Switch>
            <Route exact path="/" component={LandingPage} />
           
            <Route exact path="/About-Us" component={AboutPage} />
            <Route exact path="/Contact-page" component={ContactPage} />
            <Route exact path="/Social-page" component={SocialPage} />
            <Route exact path="/Opportunity-page" component={OpportunityPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/registerOrg" component={RegisterOrg} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/orgProfile" component={OrgProfile} />
            <Route exact path="/orgLogin" component={OrgLogin} />
          
            </Switch>
            </Content>
        <ServeFooter />
        </>
    );
  }
}

export default App;
