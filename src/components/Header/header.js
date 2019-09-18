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
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="NCAT">
  Serve U
</HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem href="/Home">Home</HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/About-Us">
   About Us
</HeaderMenuItem>
      <HeaderMenuItem href="/Orgs">Organizations</HeaderMenuItem>
      <HeaderMenuItem href="/Students">Students</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar />
  </Header>
);
export default ServeHeader;