import React from 'react';
import { TextInput } from 'carbon-components-react';



const OrgPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width">
     <div className="bx--row">
     <img className="bx--col-lg-16" src={require('./org-pic.jpg')} height="50" align="middle" alt="serve"  />
    </div> 
    
      
    
    <div className="bx--row">
    <div className="bx--offset-lg-1 bx--col-lg-8">
     <TextInput  
     labelText="Organization Name"
     placeHolderText="Organization Name"
     />
     </div>
     </div>
     
     <div className="bx--row">
       
     <div className="bx--offset-lg-1 bx--col-lg-8">
     <TextInput  
     labelText="Last Name"
     placeHolderText="Last Name"
     />
     </div>
</div>
<div className="bx--row">
<div className="bx--offset-lg-1 bx--col-lg-8">
    
     

        <TextInput
          type="email"
          required
          labelText="Email"
          placeHolderText="Email"
          
        />
        </div>
</div>

<div className="bx--row">
<div className="bx--offset-lg-1 bx--col-lg-8">
        <TextInput
          type="password"
          required
          labelText="Password"
          placeHolderText="Password"
          
        />
        </div>
</div>
    
   
    </div>
  );
};
export default OrgPage;