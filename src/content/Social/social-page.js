import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, 
  TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

{/*npm install --save react-twitter-embed*/}

const SocialPage = () => {
    return <div>
  
    <title> Serve U - Social </title>

    < div class = "bx--no">
<div className = "Timeline">
<TwitterTimelineEmbed
  sourceType="timeline"
  screenName="ServeUncat"
  theme="dark"
  options={{height: 500}}
  transparent
/>

</div> 


   
<div className="selfCenter">
<TwitterFollowButton screenName="ServeUncat" options={{size: 'large'}} />
</div>










</div>




     
      </div>;
  };
  export default SocialPage;