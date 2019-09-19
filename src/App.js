import React, { Component } from 'react';

import serveu from './ServeU.png';
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



  class App extends Component {
    render() {
      return (
        <>
          <ServeHeader />
          <Content>
          <Switch>
  <Route exact path="/" component={LandingPage} />
  <Route exact path="/About-Us" component={AboutPage} />
  
</Switch>
          </Content>
        </>
      );
    }
  }

export default App;
