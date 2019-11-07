import { TextInput, Button, Form } from "carbon-components-react";
import React, {Component} from "react";


class SignInPage extends Component{

    


    state = {
      AcctType: "Student",
      demos: [],
      demo: {
        Username: '',
        Password: '',
      }
    }
  

SELECT_ALL_STUDENTS = 'SELECT * FROM students';
SELECT_ALL_ORGS = 'SELECT * FROM organizations';

    onSubmit = () => {
      alert("");
    fetch(
      `http://localhost:4000/students/${this.state.Username}`
    )
      .then(this.getUsers)
      .catch(err => console.error(err));
  };

    handleSelect = event => {
      this.setState({AcctType:event.target.value})

    }


  render() {
    return (
      <>
    <div className="bx--row" id="row-3">
    <div className="bx--offset-lg-2 bx--col-lg-8" >


      <div class="bx--rows"  >
      <div class="bx--rows">ServeU Login</div>
        <Form className="org-form">      
                <p>select account type</p>
                <div>
                  <select value= {this.state.AcctType}onChange={this.handleSelect}>
                    <option>Organization</option>
                    <option>Student</option>
                  </select>
                  </div>
              
                  <TextInput
                    value={this.state.Username}
                    onChange={e => this.setState({ Username: e.target.value })}
                    className="form-input"
                    id="Org-Name"
                    labelText="Username"
                    placeholder="Username"
                    
                  />
                  <TextInput
                    value={this.state.Password}
                    onChange={e => this.setState({ Password: e.target.value })}
                    className="form-input"
                    id="Org-Pass"
                    type="password"
                    required
                    labelText="Password"
                    placeholder="Password"
                  />

                  <Button onClick={() => this.onSubmit()} className="button">
                    {" "}
                    Login{" "}
                  </Button>
                </Form>
        </div>
      </div>
      </div>
      
      
      
      </>

      
    );
  };
}


export default SignInPage;
