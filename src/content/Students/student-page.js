import React from 'react';
import { TextInput, Button, Form, TextArea } from 'carbon-components-react';
import './student-page.scss'



const StudentPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">
            <div className="bx--row" id="row-1">
                <img className=" bx--col-lg-16" src={require('./student-org-pic.jpg')} height="720" width="1080" align="middle" alt="serve" />


            </div>
            <div className="bx--row" id="row-2">
                <div className="bx--offset-lg-2 bx--col-lg-12">
                    <p className="p-row-2">
                        Students ensure that our community is being cared for.
                        Students are the powerhouse of any organization.
                        The constant effort of NCAT students to
         </p>
                </div>



            </div>



            <div className="bx--row" id="row-3">
                <div className="bx--offset-lg-1 bx--col-lg-8">
                    <Form className="org-form">
                        <TextInput
                            className="form-input"
                            id="Org-Name"
                            labelText="First Name"
                            placeholder="First Name"
                        />
                        <TextInput
                            className="form-input"
                            id="Org-Name"
                            labelText="Last Name"
                            placeholder="Last Name"
                        />


                        <TextInput
                            className="form-input"
                            id="Org-Email"
                            type="email"
                            labelText="Student Email"
                            placeholder="Student Email"
                        />
                        <TextInput
                            className="form-input"
                            id="Org-Pass"
                            type="password"
                            required
                            labelText="Student Password"
                            placeholder="Password"

                        />
                        <TextArea
                            labelText="Student Description"
                            placeholder="In a few words, describe your interests..."></TextArea>
                        <Button className="button"> Confirm Organization Sign Up </Button>
                    </Form>
                </div>

            </div>







        </div>
    );
};
export default StudentPage;