import React from 'react';
import { TextInput } from 'carbon-components-react';


const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
        
        
    </div>
    
      
    
    <div className="bx--row">
    <div className="bx--col-lg-16">
     <TextInput  
     labelText="First Name"
     placeHolderText="First Name"
     />
     </div>
     </div>
     
     <div className="bx--row">
       
     <div className="bx--col-lg-16">
     <TextInput  
     labelText="Last Name"
     placeHolderText="Last Name"
     />
     </div>
</div>
<div className="bx--row">
<div className="bx--col-lg-16">
    
     

        <TextInput
          type="email"
          required
          labelText="Email"
          placeHolderText="Email"
          
        />
        </div>
</div>

<div className="bx--row">
<div className="bx--col-lg-16">
        <TextInput
          type="password"
          required
          labelText="Password"
          placeHolderText="Password"
          
        />
        </div>
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