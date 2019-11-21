import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import {Button} from "carbon-components-react";

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      Username: '',
      FirstName: '',
      LastName: '',
      Email: '',
      errors: {},
      

    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      Username: decoded.Username,
      FirstName: decoded.FirstName,
      LastName: decoded.LastName,
      Email: decoded.Email
    })
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  render() {
    const { showing } = this.state;
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">STUDENT PROFILE</h1>
          </div>
          <div style={{ display: showing ? "block" : "none" }}>
              <input
                type="file"
                onChange={this.handleChange}
                accept="image/gif, image/jpeg, image/png"
              />
            </div>
            <img src={this.state.file} width="300" alt="preview" />

            <div className="bx--col-lg-8">

              <Button onClick={() => this.setState({ showing: !showing })}>
                Pick New Photo/Hide Button
              </Button>
            </div>

            <div>
              <p>
                Computer Science student, web developer, blah blah blah. Thanks for visiting my website.
              </p>

            </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
            <tr>
                <td>Username</td>
                <td>{this.state.Username}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>{this.state.FirstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.LastName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.Email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
