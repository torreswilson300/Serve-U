import React, {Component} from "react";
import { TextInput, Button, Form, TextArea } from "carbon-components-react";
import "./organization-page.scss";

class OrgPage extends Component{

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

/*
getUsers = _ =>{
  fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(response => this.setState({ demos: response.data}))
    .catch(err => console.error(err))
}
*/




onSubmit = () => {
  alert("Org has been added!")

  const { demoorg } = this.state;
  fetch(`http://localhost:4000/orgs/addOrg?Username=${this.state.Username}&OrgName=${this.state.OrgName}&Email=${this.state.Email}&Password=${this.state.Password}&Description=${this.state.Description}`)
    .then(this.getUsers)
    .catch(err => console.error(err))}

  render(){
  return (
    <div className="bx--grid bx--grid--full-width">
      <div className="bx--row" id="row-1">
        <img
          className="bx--col-lg-16"
          src={require("./orgpic.jpg")}
          height="600"
          align="middle"
          alt="serve"
        />
        <div className="top-left">
          Organizations
          <p className="top-left-1">Community. Team Work. Commitment. </p>
        </div>
      </div>
      <div className="bx--row" id="row-2">
        <div className="bx--offset-lg-2 bx--col-lg-12">
          <p className="p-row-2">
            Organizations play a huge role in community service. They make sure
            that students have opportunities to help their local community. The
            purpose of the organization is to positively guide students and
            amplify their motive to do what is right.
          </p>
        </div>
      </div>

      <div className="bx--row" id="row-3">
        <div className="bx--offset-lg-1 bx--col-lg-8">
        <Form className="org-form">
            <TextInput
                value = {this.state.Username}
                onChange = {e=> this.setState({Username: e.target.value })}
                className="form-input"
                id="Org-Name"
                labelText="Username"
                placeholder="Username"
                
              />
              <TextInput
                value = {this.state.OrgName}
                onChange = {e=> this.setState({OrgName: e.target.value })}
                className="form-input"
                id="Org-Name"
                labelText="Org Name"
                placeholder="Org Name"
                
              />
  
              <TextInput
                value = {this.state.Email}
                onChange = {e=> this.setState({Email: e.target.value })}
                className="form-input"
                id="Org-Email"
                type="email"
                labelText="Org Email"
                placeholder="Org Email"
              />
              <TextInput
              value = {this.state.Password}
              onChange = {e=> this.setState({Password: e.target.value })}
                className="form-input"
                id="Org-Pass"
                type="password"
                required
                labelText="Org Password"
                placeholder="Password"
              />
              <TextInput
              value = {this.state.Description}
              onChange = {e=> this.setState({Description: e.target.value })}
              className="form-input"
                id="Org-Des"
                labelText="Org Description"
                placeholder="Describe the Organization..."
              ></TextInput>
              <Button onClick = {() => this.onSubmit()}
              className="button"> Confirm Organization Sign Up </Button>
            </Form>
        </div>
      </div>
    </div>
  );
  };
}
  
export default OrgPage;

