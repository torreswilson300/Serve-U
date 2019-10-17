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
    demos: [],
    demo: {
      Username: "Username",
      FirstName: "FirstName",
      LastName: "LastName",
      Email: "Email",
      Password: "Password",
      Description: "Description"
    }
  };

  /*
getUsers = _ =>{
  fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(response => this.setState({ demos: response.data}))
    .catch(err => console.error(err))
}
*/

  onSubmit = () => {
    alert("User has been added!");

    const { demo } = this.state;
    fetch(
      `http://localhost:4000/users/addUser?Username=${this.state.Username}&FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&Email=${this.state.Email}&Password=${this.state.Password}&Description=${this.state.Description}`
    )
      .then(this.getUsers)
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row" id="row-1">
          <div className="bx--grid bx--grid--full-width">
            <div className="bx--row" id="row-1">
              <p id="top-left">
                If students want to sign up for Serve U services. <br />
                Click Here!
              </p>
              <Button
                id="top-left2"
                className="bx--btn bx--btn--danger bx--btn--sm"
              >
                Student Sign Up!!
              </Button>
              <img
                className=" bx--col-lg-16"
                src={require("./student-org-pic.jpg")}
                height="720"
                width="1080"
                align="middle"
                alt="serve"
              />
            </div>
            <div className="bx--row" id="row-2">
              <div className="bx--offset-lg-2 bx--col-lg-12">
                <p className="p-row-2">
                  Students ensure that our community is being cared for.
                  Students are the powerhouse of any organization. The constant
                  effort of NCAT students to give back to our community is of
                  much value.
                </p>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPage;
