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
const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName href="/" prefix="NCAT">
      Serve U
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem href="/repos">Home</HeaderMenuItem>
      <HeaderMenuItem href="/repos">About Us</HeaderMenuItem>
      <HeaderMenuItem href="/repos">Organizations</HeaderMenuItem>
      <HeaderMenuItem href="/repos">Students</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar />
  </Header>
);
export default TutorialHeader;