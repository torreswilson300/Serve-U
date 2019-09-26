import React from 'react';
import { TextInput } from 'carbon-components-react';


const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width">

< div class = "bx--no">

 
<div class="bx--vid"> 
<img src={require('./servej.gif')} alt="Serve" class="center"></img>
  </div>

  </div>
  <div class="bx--rows">
  
  </div>


  


       {/* <div className="bx--row">
        <div class="bx--rows">
  
  </div>
  <div class="bx--vid">
  <img className="bx--col-lg-16" src={require('./servej.gif')} align="middle" alt="serve"   /> 
  </div>
   
        
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
    </div> */}
  </div>
  );
};
export default LandingPage;