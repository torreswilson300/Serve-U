import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
} from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'react-router-dom';
const ServeHeader = () => (
  <Header aria-label="Carbon Tutorial" src="">
    <HeaderName element={Link} to="/" prefix="">
    <img src={require('./redserve.png')}  alt="serve" width="110"  />
</HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/">Home</HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/About-Us">About Us</HeaderMenuItem>
      <HeaderMenuItem  element={Link} to="/Orgs">Organizations</HeaderMenuItem>
      <HeaderMenuItem  element={Link} to="/Students">Students</HeaderMenuItem>
      <HeaderMenuItem   element={Link} to = "/Social-page">Social</HeaderMenuItem>
      <HeaderMenuItem  element={Link} to="/Contact-page">Contact</HeaderMenuItem>
      
    </HeaderNavigation>
    <HeaderGlobalBar />
  </Header>
);
export default ServeHeader;