import React from 'react';

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width">

< div class = "bx--no">
<div class="bx--rows">
  Welcome to ServeU!

  </div>
 
<div class="bx--vid"> 
<img src={require('./servej.gif')} alt="Serve" class="center" width = "750" ></img>
  </div>

  <div class="bx--rows">
  

  </div>
  <div class="bx--rows">
  
Our Campus Partner Organizations

  </div>

  <div class="bx--partner"> 

  <a href="https://www.ncatdining.com/explore/food-recovery">
<img src={require('./FRN.png')} alt="Serve" class="center" width = "300"></img> </a> 


<a href="https://orgsync.com/5904/chapter"><img src={require('./acm.png')} alt="Serve" class="center" width = "300"></img></a>

<a href="https://orgsync.com/5919/chapter"><img src={require('./NSBE.png')} alt="Serve" class="center" width = "300"></img></a>
<img src={require('./sclc.png')} alt="Serve" class="center" width = "300"></img>




  </div>
  <div class="bx--rows">
  
  <a href="https://orgsync.com/175004/chapter">
    <img src={require('./nsls.png')} alt="Serve" class="center" width = "300"></img> </a>

  <a href="https://orgsync.com/5916/chapter"><img src={require('./ise.png')} alt="Serve"  width = "500"></img> </a> 

  <img src={require('./swe.png')} alt="Serve"  width = "500"></img>
  </div>

 </div>
       
  </div>
  );
};
export default LandingPage;
