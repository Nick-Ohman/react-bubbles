import React, {useState} from "react";
import axios from "axios"

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({});

  const inputChange = e => {
    setUser ({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const loginPost = e => {
    e.preventDefault();
    axios
    .post(`http.//localhost:3000/api/login`, user)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <div className="loginForm">
        <form onSubmit={loginPost}>
          <h2>Log In</h2>
          <label>Username</label>
          <input className='login'
          type="username"
          id='username'
          value={user.username}
          onChange={inputChange}
          />
          <label>Password</label>
          <input className='password'
          type="password"
          id='password'
          value={user.password}
          onChange={inputChange}
          />
        </form>
        <button>Log In</button>
      </div>
    </>
  );
};

export default Login;
