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

    onSubmit = () => {
      alert("User has been added!");
  
      const { demo } = this.state;
      fetch(
        `http://localhost:4000/users/addUser?Username=${this.state.Username}&FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&Email=${this.state.Email}&Password=${this.state.Password}&Description=${this.state.Description}`
      )
        .then(this.getUsers)
        .catch(err => console.error(err));
    };

    render(){
  return (


    <div className="bx--row" id="row-3">
    <div className="bx--offset-lg-2 bx--col-lg-8"
    
    
    >


      <div class="bx--rows"
      >
      <div class="bx--rows">Student Login</div>
        <Form className="org-form"
        >
                  <TextInput
                    value={this.state.Username}
                    onChange={e => this.setState({ Username: e.target.value })}
                    className="form-input"
                    id="Org-Name"
                    labelText="Username"
                    placeholder="Username"
                    
                  />
                  <TextInput
                    value={this.state.Password}
                    onChange={e => this.setState({ Password: e.target.value })}
                    className="form-input"
                    id="Org-Pass"
                    type="password"
                    required
                    labelText="Password"
                    placeholder="Password"
                  />

                  <Button onClick={() => this.onSubmit()} className="button">
                    {" "}
                    Login{" "}
                  </Button>
                </Form>
      </div>

      <div class="bx--rows"></div>

      <div class="bx--social"></div>
    </div>
  </div>
);
};
}

export default SignInPage;
