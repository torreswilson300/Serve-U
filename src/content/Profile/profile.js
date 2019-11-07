import React, { Component } from "react";
import "./profile.scss";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <div className="bx--col-lg-16">
            <h1 align="center" className="title">
              Profile 
            </h1>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--col-lg-16">
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
              {this.state.showWarning ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--offset-lg-1 bx--col-lg-8">
            <h1>"Student Name"</h1>
            <h2>Description:</h2>
            <p>
              I am a computer science student at NC A&T. I am from Memphis,
              Tennessee and
            </p>
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
