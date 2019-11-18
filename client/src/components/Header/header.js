
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
import { Link, withRouter } from "react-router-dom";
import "./header.scss";
class ServeHeader extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('orgtoken')
    this.props.history.push(`/`)
  }

  render(){
    const loginDefault = (
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
          <HeaderMenuItem element={Link} to="/Contact-page">
            Contact
          </HeaderMenuItem>
        </HeaderNavigation> 
        <div className="left-side">
        <HeaderNavigation aria-label="Carbon Tutorial" align="left">
        <HeaderMenuItem element={Link} to="/register">
            {" "}
            Student Sign-Up{" "}
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/login">
            {" "}
           Student Login{" "}
          </HeaderMenuItem> 
          <HeaderMenuItem element={Link} to="/registerOrg">
            {" "}
            Org Sign-Up{" "}
          </HeaderMenuItem> 
          <HeaderMenuItem element={Link} to="/orgLogin">
            {" "}
            Org Login{" "}
          </HeaderMenuItem>      
        </HeaderNavigation>
        </div>
      </Header>

    )
  
    const studentLink = (
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
          <HeaderMenuItem element={Link} to="/Opportunity-page">
            Opportunities 
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/Social-page">
            Social
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/Contact-page">
            Contact
          </HeaderMenuItem>
          </HeaderNavigation>
        <HeaderNavigation aria-label="Carbon Tutorial" id="left-side"align="left">
        <HeaderMenuItem element={Link} to="/Profile">
            {" "}
            Profile{" "}
          </HeaderMenuItem> 
          <HeaderMenuItem>
          <a href="t" onClick={this.logOut.bind(this)}>
            {" "}
            Logout{" "}
            </a>
          </HeaderMenuItem>   
          </HeaderNavigation>  
      </Header>
    );

    const orgLink = (
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
          <HeaderMenuItem element={Link} to="/Opportunity-page">
            Opportunities 
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/Social-page">
            Social
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/Contact-page">
            Contact
          </HeaderMenuItem>
          </HeaderNavigation>
        <HeaderNavigation aria-label="Carbon Tutorial" id="left-side"align="left">
        <HeaderMenuItem element={Link} to="/orgProfile">
            {" "}
            Profile{" "}
          </HeaderMenuItem> 
          <HeaderMenuItem>
          <a href="t" onClick={this.logOut.bind(this)}>
            {" "}
            Logout{" "}
            </a>
          </HeaderMenuItem>   
          </HeaderNavigation>  
      </Header>
    );

    return (
      <Header>

      <HeaderMenuItem element={Link} to = "/"> Home </HeaderMenuItem>

      {localStorage.usertoken ? studentLink : localStorage.orgtoken ? orgLink : loginDefault}

      </Header>
    );
  }
}
export default withRouter(ServeHeader)