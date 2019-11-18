import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class OrgProfile extends Component {
  constructor() {
    super()
    this.state = {
      Username: '',
      OrgName: '',
      Email: '',
      Description: '',
      NumOfMembers: '',
      NumOfPost: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.orgtoken
    const decoded = jwt_decode(token)
    this.setState({
      Username: decoded.Username,
      OrgName: decoded.OrgName,
      Email: decoded.Email,
      Description: decoded.Description
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">ORG PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
            <tr>
                <td>Username</td>
                <td>{this.state.Username}</td>
              </tr>
              <tr>
                <td>Organization Name</td>
                <td>{this.state.OrgName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.Email}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{this.state.Description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default OrgProfile
