import React from 'react';

const AuthContext = React.createContext("");

class AuthProvider extends React.Component {
  state = {
    isAuth: false
  };

  authHandler = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };

  getProviderValue = () => {
    const { isAuth } = this.state;
    return {
      isAuth,
      authHandler: this.authHandler
    };
  };

  render() {
    const { children } = this.props;
    return {
      <AuthContext.Provider value={this.getProviderValue()}>
        {children}
      </AuthContext.Provider>
    };
  }
}

export { AuthProvider, AuthContext };