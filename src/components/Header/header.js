import React, { Component } from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction
} from "carbon-components-react/lib/components/UIShell";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import { Link } from "react-router-dom";
class ServeHeader extends Component {
  onClick() {}
  render() {
    return (
      <Header aria-label="Carbon Tutorial" src="">
        
       
          <a href="/">
        <img element={Link} to="/" prefix=""src={require("./redserve.png")} alt="serve" width="50" />
        </a>
        
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
        <HeaderNavigation aria-label="Carbon Tutorial" id="left-side"align="left">
        <HeaderMenuItem element={Link} to="/SignIn">
            {" "}
            Login{" "}
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/Profile">
        Profile
      </HeaderMenuItem>
          
        </HeaderNavigation>
        
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="User Avatar"
            element={Link}
            to="/Profile"
          >
            <UserAvatar20> </UserAvatar20>
          </HeaderGlobalAction>
          
        </HeaderGlobalBar>
      </Header>
    );
  }
}
export default ServeHeader;
