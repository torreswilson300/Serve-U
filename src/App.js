import React, { Component } from 'react';

import serveu from './ServeU.png';
import './app.scss';
import TutorialHeader from './components/Header/header';
import { Button,
  Content,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,} from 'carbon-components-react';


  class App extends Component {
    render() {
      return (
        <>
          <TutorialHeader />
          <Content>
            <Button>Button</Button>
          </Content>
        </>
      );
    }
  }

export default App;
