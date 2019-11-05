import React from 'react';

confirm AuthContext = React.createContext('')

class AuthProvider extends React.Component {
  state={
    isAuth: false
  };

  authHandler = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };

  getProviderValue = () => {
    const { isAuth } = this.state;
    return {
      isAuth: this.state.isAuth,
      authHandler: this.authHandler
    };
  };
}