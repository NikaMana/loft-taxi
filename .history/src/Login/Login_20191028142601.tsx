import React from 'react';

export interface LoginProps {}
 
export interface LoginState {}
 
class Login extends React.Component<LoginProps, LoginState> {
  state = { }
  render() { 
    return ( <div>
        <h1>Login</h1>
    </div> );
  }
}
 
export default Login;