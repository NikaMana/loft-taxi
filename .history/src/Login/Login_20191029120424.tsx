import React from 'react';

export interface LoginProps {}
 
export interface LoginState {}
 
class Login extends React.Component<LoginProps, LoginState> {
  state = { }
  render() { 
    
    return ( <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>
    </div> );
  }
}
 
export default Login;