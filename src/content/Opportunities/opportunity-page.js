import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./opportunity-page.scss";
import {  Button, } from "carbon-components-react";

import {
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBBadge,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
class OpportunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      events: []
    };
  }
  addEvent = () => {
    var newArray = [...this.state.events];
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description
    });
    this.setState({ events: newArray });
    this.setState({
      time: "",
      title: "",
      location: "",
      description: ""
    });
  };
  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
  };
  handleDelete = eventId => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <title> Serve U - Opportunity </title>

          <div class="bx--grid bx--grid--full-width">
            <div class="bx--row">
              <img
                className="bx--col-lg-16"
                src={require("./op.jpg")}
                align="middle"
                alt="serve"
                width="750"
                height="300"
              />
            </div>

            <div class="bx--rows">
              Listed below are the current volunteer opportunities for all
              students.
            </div>


        <div class="bx--rows"></div>
        </div>
            
        

        </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="9" className="mb-r">
              <h1 className="opp-header">Opportunities List</h1>
              <hr />
              <div id="events">
                {this.state.events.map(event => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <Button color="info" rounded onClick={this.toggleModal}>
                    Add Event
                  </Button>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
              <h6 className="my-3">
                There are{" "}
                <b>{this.state.events.length} opportunities available. </b>
              </h6>
            </MDBCol>
          </MDBRow>
          <hr/>
        </MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggleModal}
          >
            Add new event here:
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                name="time"
                label="Time"
                icon="clock"
                hint="11:00am"
                group
                type="text"
                getValue={this.handleInputChange("time")}
              />
              <MDBInput
                name="title"
                label="Title"
                icon="edit"
                hint="Briefing"
                group
                type="text"
                getValue={this.handleInputChange("title")}
              />
              <MDBInput
                name="location"
                label="Location (optional)"
                icon="map"
                group
                type="text"
                getValue={this.handleInputChange("location")}
              />
              <MDBInput
                name="description"
                label="Description (optional)"
                icon="sticky-note"
                group
                type="textarea"
                getValue={this.handleInputChange("description")}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <Button
              color="info"
              onClick={() => {
                this.toggleModal();
                this.addEvent();
              }}
            >
              Add
            </Button>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}
class Event extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="media mt-1">
          <h3 className="h3-responsive font-weight-bold mr-3">
            Event Title: {this.props.title}
          </h3>
          <div className="media-body mb-3 mb-lg-3">
            <h4 className="mt-0 font-weight-bold">
              {" "}
              Event Time: {this.props.time}{" "}
            </h4>{" "}
            <hr className="hr-bold my-2" />
            {this.props.location && (
              <React.Fragment>
                <p className="font-smaller mb-0">
                  <MDBIcon icon="location-arrow" />
                  Location: {this.props.location}
                </p>
              </React.Fragment>
            )}
          </div>
        </div>
        {this.props.description && (
          <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
            Description: {this.props.description}
          </p>
        )}
        <Button
          color="info"
          rounded
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete Event
        </Button>
        <hr />
      </React.Fragment>
    );
  }
}
export default OpportunityPage;
