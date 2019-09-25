import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state = {
    demos: [],
    demo: {
      Username: 'Username',
      FirstName: 'FirstName',
      LastName: 'LastName',
      Email: 'Email',
      Password: 'Password',
      UserID: 4
    }
  }

  componentDidMount(){
    this.getUsers();
  }


  getUsers = _ =>{
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(response => this.setState({ demos: response.data}))
      .catch(err => console.error(err))
  }

  addUsers = _ => {
    const { demo } = this.state;
    fetch(`http://localhost:4000/users/addUser?Username=${demo.Username}&FirstName=${demo.FirstName}&LastName=${demo.LastName}&Email=${demo.Email}&Password=${demo.Email}&UserID=${demo.UserID}`)
      .then(this.getUsers)
      .catch(err => console.error(err))
  }


  renderUser = ({UserID, Username, FirstName, LastName, Email, Password}) => <div key={UserID}> <li> Username: {Username} ,  First Name: {FirstName} ,  Last Name: {LastName},   Email: {Email},  Password: {Password}</li> </div>

  render() {
    const { demos, demo } = this.state;
    return (
    <div className="App">
      {demos.map(this.renderUser)}

      <div>
        <input value={demo.Username} onChange={e => this.setState({demo: {...demo, Username: e.target.value}})} /> 
        <input value={demo.FirstName} onChange={e => this.setState({demo: {...demo, FirstName: e.target.value}})}/>
        <input value={demo.LastName} onChange={e => this.setState({demo: {...demo, LastName: e.target.value}})} />
        <input value={demo.Email} onChange={e => this.setState({demo: {...demo, Email: e.target.value}})} />
        <input value={demo.Password} onChange={e => this.setState({demo: {...demo, Password: e.target.value}})}/>
        <input value={demo.UserID} onChange={e => this.setState({demo: {...demo, UserID: e.target.value}})}/>
        <button onClick={this.addUsers}>Add demo </button>
      </div>

    </div>
    );
  }
}

export default App;
      