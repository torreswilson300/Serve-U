import React, { Component } from 'react';


import './app.scss';
import ServeHeader from './components/Header/header';
import { Button,
  Content,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent} from 'carbon-components-react';
  import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/Home/home-page';
import AboutPage from './content/About Us/about-us';
import OrgPage from './content/Organizations/organization-page';
import ContactPage from './content/Contact/contact-page'; 

//import StudentPage from './content/About Us/about-us';


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
 
  
</Switch>
          </Content>
        </>
      );
    }
  }

export default App;
