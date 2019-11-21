import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {Button} from "carbon-components-react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showWarning: true,
      Username: '',
      FirstName:'',
      LastName: '',
      Email: '',
      errors: {}
     };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
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
    const { showing } = this.state;
    return (
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
          <h1>Student FirstName</h1>
          {this.state.FirstName}
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--col-lg-16">
            <div style={{ display: showing ? "block" : "none" }}>
              <input
                type="file"
                onChange={this.handleChange}
                accept="image/gif, image/jpeg, image/png"
              />
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
            <img src={this.state.file} width="300" alt="preview" />

            <div className="bx--col-lg-8">
              
              <Button onClick={() => this.setState({ showing: !showing })}>
                Pick New Photo/Hide Button
              </Button>
            </div>

            <div>
              <p>
                Computer Science student, web developer, etc. Thanks for visiting my profile.
              </p>
              
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
            <h2>Student Involvement</h2>
            <p>Association for Computing Machinery</p>
            <p>NSBE</p>
            <p>SWE</p>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
            <h2>Community Service Hours</h2>
            <p>Association for Computing Machinery: 16hrs</p>
            <p>NSBE: 12hrs</p>
            <p>SWE: 6hrs</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile
