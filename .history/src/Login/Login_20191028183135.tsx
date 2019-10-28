import React from 'react';
import Nav from '../Nav';

export interface LoginProps {}
 
export interface LoginState {}
 
class Login extends React.Component<LoginProps, LoginState> {
  state = { }
  render() { 
    const onSubmit = e => {
      e.preventD
    }
    return ( <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div>
            <input type="email" name="email" label="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" name="password" label="password" placeholder="Password" />
          </div>
        </form>
    </div> );
  }
}
 
export default Login;