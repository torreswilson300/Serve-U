import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'react-router-dom';
const ServeHeader = () => (
  <Header aria-label="Carbon Tutorial" src="">
    <HeaderName element={Link} to="/" prefix="">
    <img src={require('./ServeU.png')}  alt="serve" width="75" />
</HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/">Home</HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/About-Us">About Us</HeaderMenuItem>
      <HeaderMenuItem  element={Link} to="/Orgs">Organizations</HeaderMenuItem>
      <HeaderMenuItem  element={Link} to="/Students">Students</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar />
  </Header>
);
export default ServeHeader;