import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

{
  /*npm install --save react-twitter-embed*/
}

const SocialPage = () => {
    return <div>
  
    <title> Serve U - Social </title>

   
    <div class="bx--bl">KEEPING UP WITH SERVEU!</div> 
   
   
   
   
    < div class = "bx--no">
    <TwitterShareButton url="www.serveu.com" options={{
    text: '#serveu',
    via: 'serveuncat',
   }} />
<div className = "Timeline">
<TwitterTimelineEmbed
  sourceType="timeline"
  screenName="ServeUncat"
  theme="dark"
  options={{height: 800, width: 800}}

  transparent
  class="center"

/>

</div> 


   


<div class="bx--row">
          <img
            className="bx--col-lg-16"
            src={require("./cben.png")}
            align="middle"
            alt="serve"
          />
        </div>

        <div className="selfCenter">
<TwitterFollowButton screenName="ServeUncat" options={{size: 'large'}} />  
</div>


</div>




     
      </div>;
  };
  export default SocialPage;
