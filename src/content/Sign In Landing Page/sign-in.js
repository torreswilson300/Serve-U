import { TextInput, Button, Form, TextArea } from "carbon-components-react";
import React, {Component} from "react";
class SignInPage extends Component{

    state = {
      demos: [],
      demoorg: {
        Username: 'Username',
        OrgName: 'OrgName', 
        Email: 'Email',
        Password: 'Password',
        Description: 'Description',
      }
    }

    render(){
  return (
    <div className="bx--row" id="row-3">
              <div className="bx--offset-lg-1 bx--col-lg-8">
                <Form className="org-form">
                  <TextInput
                    value={this.state.Username}
                    onChange={e => this.setState({ Username: e.target.value })}
                    className="form-input"
                    id="Org-Name"
                    labelText="Username"
                    placeholder="Username"
                  />
                  <TextInput
                    value={this.state.FirstName}
                    onChange={e => this.setState({ FirstName: e.target.value })}
                    className="form-input"
                    id="Org-Name"
                    labelText="First Name"
                    placeholder="First Name"
                  />
                  <TextInput
                    value={this.state.LastName}
                    onChange={e => this.setState({ LastName: e.target.value })}
                    className="form-input"
                    id="Org-Name"
                    labelText="Last Name"
                    placeholder="Last Name"
                  />

                  <TextInput
                    value={this.state.Email}
                    onChange={e => this.setState({ Email: e.target.value })}
                    className="form-input"
                    id="Org-Email"
                    type="email"
                    labelText="Student Email"
                    placeholder="Student Email"
                  />
                  <TextInput
                    value={this.state.Password}
                    onChange={e => this.setState({ Password: e.target.value })}
                    className="form-input"
                    id="Org-Pass"
                    type="password"
                    required
                    labelText="Student Password"
                    placeholder="Password"
                  />
                  <TextArea
                    value={this.state.Description}
                    onChange={e =>
                      this.setState({ Description: e.target.value })
                    }
                    className="form-input"
                    id="Student-Description"
                    labelText="Student Description"
                    placeholder="In a few words, describe your interests..."
                  ></TextArea>
                  <Button onClick={() => this.onSubmit()} className="button">
                    {" "}
                    Confirm Organization Sign Up{" "}
                  </Button>
                </Form>
              </div>
            </div>
  );
};
}
export default SignInPage;
