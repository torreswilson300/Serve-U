//npm<link rel="stylesheet" href="about-us.scss"></link>

import "./about-us.scss";
import "./aboutus.php";
import { SocialIcon } from "react-social-icons";
import React from "react";
const AboutPage = () => {
  return (
    <div>
      <title> Serve U - About Us </title>

      {/*<img className="com" src={require('./communityservice.jpg')} align="middle" alt="serve" width="900"  />

   <div>
     <abouts>
       ServeU makes becoming involved in your community easy and interactive. 

  </abouts>
  </div>
  

  
  <div style={{backgroundColor: "#0073CF"}}>

 <h1 june> <strong> OUR MISSION </strong> </h1>
 
 </div>
   <div>
     <p>
 We aim to create web application that allows individuals to conveniently
  yet efficiently log service hours, access various community service events, 
  share ideas with organizations, allow leaders to sign off and on hours, and more.
  </p>
  
</div> */}

      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <img
            className="bx--col-lg-16"
            src={require("./communityservice.jpg")}
            align="middle"
            alt="serve"
          />
        </div>

        <div class="bx--rows">
          ServeU makes becoming involved in your community interactive and easy.
          We aim to allow individuals of the community to conveniently yet
          efficiently log service hours, access various community service
          events, share ideas with organizations, allow leaders to sign off and
          on hours, and more.
        </div>

        <div class="bx--row">
          <img
            className="bx--col-lg-16"
            src={require("./serve.jpg")}
            align="middle"
            alt="serve"
          />
        </div>

        <div class="bx--rows">
          To provide the most actionable community service website for the North
          Carolina A&T community.
        </div>

        <div class="bx--social">
          <p>Connect with us today! </p>
          <SocialIcon url="http://twitter.com/" />
          <SocialIcon url="http://snapchat.com/" />
          <SocialIcon url="http://linkedin.com/" />
          <SocialIcon url="http://instagram.com/" />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
