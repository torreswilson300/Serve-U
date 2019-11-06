import React, {Component} from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "carbon-components-react/lib/components/UIShell";
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import { Link } from "react-router-dom";
class ServeHeader extends Component {
  render(){
    return(
  <Header aria-label="Carbon Tutorial" src="">
    
    <HeaderName element={Link} to="/" prefix="">
      <img src={require("./redserve.png")} alt="serve" width="110" />
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/">
        Home
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/About-Us">
        About Us
      </HeaderMenuItem>
      
      <HeaderMenuItem element={Link} to="/Social-page">
        Social
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/Contact-page">
        Contact
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderMenuItem element={Link} to="/SignIn"> Login </HeaderMenuItem>
  
</HeaderGlobalBar>
    
  </Header>
  );
}
}
export default ServeHeader;
