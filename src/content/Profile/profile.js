import React, { Component } from "react";
import Avatar from "react-avatar-edit";
import "./profile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);

    const src = "einstein.jpg";
    this.state = {
      preview: null,
      src,
      isLoggedIn: false
    };
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <div className="bx--col-lg-16">
            <h1 align="center">Profile Page</h1>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--col-lg-16">
            <input
              type="file"
              onChange={this.onImageChange}
              className="filetype"
              id="group_image"
            />
            <img id="target" src={this.state.image} alt="preview" width="150"/>

            
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--col-lg-16">
            <h2 align="center">List of student orgs</h2>
            <p align="center">Association for Computing Machinery</p>
            <p align="center">NSBE</p>
            <p align="center">SWE</p>
          </div>
        </div>
        <div class="bx--row">
          <div className="bx--col-lg-16">
            <h2 align="center">Number of ours for each org</h2>
            <p align="center">Association for Computing Machinery: 16hrs</p>
            <p align="center">NSBE: 12hrs</p>
            <p align="center">SWE: 6hrs</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
