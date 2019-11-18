import React, { Component } from "react";
import {Button} from "carbon-components-react";
import "./profile.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
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

  render() {
    const { showing } = this.state;
    return (
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
          <h1>Student Name</h1>
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
                Computer Science student, web developer, blah blah blah. Thanks for visiting my website.
              </p>
              
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
            <h2>List of student orgs</h2>
            <p>Association for Computing Machinery</p>
            <p>NSBE</p>
            <p>SWE</p>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
            <h2>Number of ours for each org</h2>
            <p>Association for Computing Machinery: 16hrs</p>
            <p>NSBE: 12hrs</p>
            <p>SWE: 6hrs</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;