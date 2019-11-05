//import './about-us.scss';
//import './aboutus.php';

import { TextInput, Button, Form, TextArea } from "carbon-components-react";
import React from "react";
const ContactPage = () => {
  return (
    <div>
      <title> Serve U - Contact </title>

      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <img
            className="bx--col-lg-16"
            src={require("./banners-contact_us.png")}
            align="middle"
            alt="serve"
          />
        </div>

        <div class="bx--rows">
          How can we help you?
          <Form className="contact-form">
            <TextInput
              className="form-input"
              id="Contact-Name"
              labelText="Name (Required)"
            />

            <TextInput
              className="form-input"
              id="Email"
              labelText="Email address"
            />

            <TextArea
              labelText="Message"
              placeholder="Please leave a message..."
            ></TextArea>
            <Button className="button">SUBMIT</Button>
          </Form>
        </div>

        <div class="bx--rows"></div>

        <div class="bx--social"></div>
      </div>
    </div>
  );
};
export default ContactPage;
