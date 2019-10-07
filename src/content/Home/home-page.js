import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


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
<img src={require('./FRN.png')} alt="Serve" class="center" width = "300"></img>
<img src={require('./acm.png')} alt="Serve" class="center" width = "300"></img>
<img src={require('./NSBE.png')} alt="Serve" class="center" width = "300"></img>
<img src={require('./sclc.png')} alt="Serve" class="center" width = "300"></img>


  </div>
  

 </div>
       
  </div>
  );
};
export default LandingPage;