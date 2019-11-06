import React, { Component, useRef, useEffect } from "react";
import {
  TextInput,
  Button,
  Form,
  TextArea,
  HeaderMenuItem
} from "carbon-components-react";
import "./student-page.scss";
import { Route, Link } from "react-router-dom";

class StudentPage extends Component {

  state = {
    studentList: [],
    students: {
      Username: 'Username',
      OrgName: 'OrgName', 
      Email: 'Email',
      Password: 'Password',
      Description: 'Description',
    }
  }

  onSubmit = () => {
    alert("You Have Successfully Created A Student Account!");

    const { students } = this.state;
    fetch(
      `http://localhost:4000/students/addStudent?Username=${this.state.Username}&FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&Email=${this.state.Email}&Password=${this.state.Password}`
    )
      .then(this.getUsers)
      .catch(err => console.error(err));
  };

    /*
getUsers = _ =>{
  fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(response => this.setState({ studentList: response.data}))
    .catch(err => console.error(err))
}
*/

  render(){
return (
  
  <div className="bx--row" id="row-3">
              <div className="bx--offset-lg-1 bx--col-lg-8">

              <div class="bx--rows">Student Sign-Up</div>
              <Form className="org-form">
                
                <TextInput
                  value={this.state.Username}
                  onChange={e => this.setState({ Username: e.target.value })}
                  className="form-input"
                  id="Student-Username"
                  labelText="Username"
                  placeholder="Username"
                />
                <TextInput
                  value={this.state.FirstName}
                  onChange={e => this.setState({ FirstName: e.target.value })}
                  className="form-input"
                  id="Student-FirstName"
                  labelText="First Name"
                  placeholder="First Name"
                />
                <TextInput
                  value={this.state.LastName}
                  onChange={e => this.setState({ LastName: e.target.value })}
                  className="form-input"
                  id="Student-LastName"
                  labelText="Last Name"
                  placeholder="Last Name"
                />

                <TextInput
                  value={this.state.Email}
                  onChange={e => this.setState({ Email: e.target.value })}
                  className="form-input"
                  id="Student-Email"
                  type="email"
                  labelText="Student Email"
                  placeholder="Student Email"
                />
                <TextInput
                  value={this.state.Password}
                  onChange={e => this.setState({ Password: e.target.value })}
                  className="form-input"
                  id="Student-Password"
                  type="password"
                  required
                  labelText="Student Password"
                  placeholder="Password"
                />

                <Button onClick={() => this.onSubmit()} className="button">
                  {" "}
                  Confirm Student Sign Up{" "}
                </Button>
              </Form>
            </div>
          </div>
);
};
}

export default StudentPage;
