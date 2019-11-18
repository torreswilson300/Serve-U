import React, { Component } from 'react'
import { registerOrg } from './UserFunctions'

class RegisterOrg extends Component {
  constructor() {
    super()
    this.state = {
      Username: '', 
      OrgName: '',
      Email: '',
      Password: '',
      Description: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      Username: this.state.Username,
      OrgName: this.state.OrgName,
      Email: this.state.Email,
      Password: this.state.Password,
      Description: this.state.Description
    }

    registerOrg(newUser).then(res => {
      this.props.history.push(`/orgLogin`)
    })

    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register Your Organization</h1>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="Username"
                  placeholder="Enter Organization Username"
                  value={this.state.Username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Organization name</label>
                <input
                  type="text"
                  className="form-control"
                  name="OrgName"
                  placeholder="Enter the Organization's name"
                  value={this.state.OrgName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input
                  type="Email"
                  className="form-control"
                  name="Email"
                  placeholder="Enter Email"
                  value={this.state.Email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  className="form-control"
                  name="Password"
                  placeholder="Password"
                  value={this.state.Password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <input
                  type="Description"
                  className="form-control"
                  name="Description"
                  placeholder="Enter Description of Org"
                  value={this.state.Description}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterOrg
