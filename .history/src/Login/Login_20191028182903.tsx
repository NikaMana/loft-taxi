import React from 'react';
import Nav from '../Nav';

export interface LoginProps {}
 
export interface LoginState {}
 
class Login extends React.Component<LoginProps, LoginState> {
  state = { }
  render() { 
    return ( <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div>
            <input type="email" name="email" label="email" placeholder="Email" />
          </div>
          <div>
            <input 
          </div>
        </form>
    </div> );
  }
}
 
export default Login;