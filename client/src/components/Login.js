import React from "react";

import {axiosWithAuth} from "../utils/axiosWithAuth"

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  inputChange = e => {
    e.preventDefault();
    this.setState({
      account: {
        ...this.state.account,
        [e.target.name]: e.target.value,
      },
    });
  };

   login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', this.state.account)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      this.props.history.push('/BubblePage')
    })
    .catch(err => console.log(err))
  }
  render(){
  return (
    <>
      <div className="loginForm">
        <form onSubmit={this.login}>
          <h2>Log In</h2>
          <label>Username</label>
          <input className='login'
          type="text"
          name="username"
          id='username'
          value={this.state.account.username}
          onChange={this.inputChange}
          />
          <label>Password</label>
          <input className='password'
          type="password"
          name='password'
          id='password'
          value={this.state.account.password}
          onChange={this.inputChange}
          />
        
        <button>Log In</button>
        </form>
      </div>
    </>
  );
  }
};


export default Login;
