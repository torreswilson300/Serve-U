import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      Username: '',
      FirstName: '',
      LastName: '',
      Email: '',
      errors: {}
    }
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

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">STUDENT PROFILE</h1>
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
