import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      Username: '', 
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
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
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="Username"
                  placeholder="Enter your Username"
                  value={this.state.Username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="FirstName"
                  placeholder="Enter your first name"
                  value={this.state.FirstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="LastName"
                  placeholder="Enter your lastname name"
                  value={this.state.LastName}
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

export default Register
