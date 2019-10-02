import React from 'react';
import { TextInput, Button, Form, TextArea } from 'carbon-components-react';
import './organization-page.scss'



const OrgPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">
            <div className="bx--row" id="row-1">
                <img className="bx--col-lg-16" src={require('./orgpic.jpg')} height="600" align="middle" alt="serve" />
                <div className="top-left">
                    Organizations
     <p className="top-left-1">Community. Team Work. Commitment. </p>
                </div>

            </div>
            <div className="bx--row" id="row-2">
                <div className="bx--offset-lg-2 bx--col-lg-12">
                    <p className="p-row-2">
                        Organizations play a huge role in community service.
                        They make sure that students have opportunities to help their local community.
                        The purpose of the organization is to positively guide students and amplify their motive to do what is right.
         </p>
                </div>



            </div>



            <div className="bx--row" id="row-3">
                <div className="bx--offset-lg-1 bx--col-lg-8">
                    <Form className="org-form">
                        <TextInput
                            className="form-input"
                            id="Org-Name"
                            labelText="Organization Name"
                            placeholder="Organization Name"
                        />



                        <TextInput
                            className="form-input"
                            id="Org-Email"
                            type="email"
                            labelText="Organization Email"
                            placeholder="Organization Email"
                        />
                        <TextInput
                            className="form-input"
                            id="Org-Pass"
                            type="password"
                            required
                            labelText="Organization Password"
                            placeholder="Password"

                        />
                        <TextArea
                            labelText="Organization Description"
                            placeholder="In a few words, describe your organization..."></TextArea>
                        <Button className="button"> Confirm Organization Sign Up </Button>
                    </Form>
                </div>

            </div>







        </div>
    );
};
export default OrgPage;