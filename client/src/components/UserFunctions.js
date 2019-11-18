import axios from 'axios'

export const register = newUser => {
  return axios
    .post('students/register', {
      Username: newUser.Username,
      FirstName: newUser.FirstName,
      LastName: newUser.LastName,
      Email: newUser.Email,
      Password: newUser.Password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('students/login', {
      Email: user.Email,
      Password: user.Password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const registerOrg = newUser => {
  return axios
    .post('organizations/registerOrg', {
      Username: newUser.Username,
      OrgName: newUser.OrgName,
      Email: newUser.Email,
      Password: newUser.Password,
      Description: newUser.Description
    })
    .then(response => {
      console.log('Registered')
    })
}

export const orgLogin = user => {
  return axios
    .post('organizations/orgLogin', {
      Email: user.Email,
      Password: user.Password
    })
    .then(response => {
      localStorage.setItem('orgtoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
