import React from 'react';
import { TextInput } from 'carbon-components-react';


const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
        <img className="bx--col-lg-16" src={require('./ServeU.png')} align="middle" alt="serve" width="200" />
    </div>
    
      
    
    <div className="bx--row">
     <TextInput  
     labelText="First Name"
     placeHolderText="First Name"
     />
     </div>
     
     <div className="bx--row">
        <TextInput
          required
          labelText="Last Name"
          placeHolderText="Last Name"
              />
</div>
<div className="bx--row">

        <TextInput
          type="email"
          required
          labelText="Email"
          placeHolderText="Email"
          
        />
</div>

<div className="bx--row">

        <TextInput
          type="password"
          required
          labelText="Password"
          placeHolderText="Password"
          
        />
</div>
    
    <div className="bx--row">
      <div className="bx--col-sm-1">1/4</div>
      <div className="bx--col-sm-1">1/4</div>
      <div className="bx--col-sm-1">1/4</div>
      <div className="bx--col-sm-1">1/4</div>
    </div>
  </div>
  );
};
export default LandingPage;