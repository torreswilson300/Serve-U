import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Headers from 'carbon-components-react/lib/components/UIShell'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('orgtoken')
    this.props.history.push(`/`)
  }

  render() {
    // Default Navbar
    const loginRegLink = (
      <Link>
          <li className="nav-item">
          <Link to="/orgLogin" className="nav-link">
            Org-Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Student-Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
           Student Sign-Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/registerOrg" className="nav-link">
           Organization Sign-Up
          </Link>
        </li>
        </Link>
    )
// NavBar for Students 
    const userLink = (

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )
// NavBar for Orgnizations 
const orgLink = (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/orgProfile" className="nav-link">
        Profile
      </Link>
    </li>
    <li className="nav-item">
      <a href="" onClick={this.logOut.bind(this)} className="nav-link">
        Logout
      </a>
    </li>
  </ul>
)



    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
       
              <Link to="/" className="nav-link">
                Home
              </Link>
  
          {/* If the usertoken exist then display the userLink nav bar */}
          
          {localStorage.orgtoken ? orgLink : localStorage.usertoken ? userLink : loginRegLink }
          
  
      </nav>
    )
  }
}

export default withRouter(Landing)
