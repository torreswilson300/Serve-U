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

    < div class = "bx--no">
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


   
<div className="selfCenter">
<TwitterFollowButton screenName="ServeUncat" options={{size: 'large'}} />  <TwitterShareButton url="www.serveu.com" options={{
    text: '#serveu',
    via: 'serveuncat',
   }} />
</div>










</div>




     
      </div>;
  };
  export default SocialPage;
