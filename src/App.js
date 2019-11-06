import React, { Component } from "react";

import "./app.scss";
import ServeHeader from "./components/Header/header";
import { Content } from "carbon-components-react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/Home/home-page";
import AboutPage from "./content/About Us/about-us";
import OrgPage from "./content/Organizations/organization-page";
import ContactPage from "./content/Contact/contact-page";
import SocialPage from "./content/Social/social-page";
import StudentPage from "./content/Students/student-page";

import ServeFooter from "./components/Footer/footer";
import SignInPage from "./content/Sign In Landing Page/sign-in";

class App extends Component {
  

  
  
  render() {
    return (
      <>
        <ServeHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/About-Us" component={AboutPage} />
            <Route exact path="/Orgs" component={OrgPage} />
            <Route exact path="/Contact-page" component={ContactPage} />
            <Route exact path="/Social-page" component={SocialPage} />
            <Route exact path="/Students" component={StudentPage}/>
            <Route exact path="/SignIn" component={SignInPage} />

          </Switch>
        </Content>
        <ServeFooter />
        
      </>
    );
  }
}

export default App;
