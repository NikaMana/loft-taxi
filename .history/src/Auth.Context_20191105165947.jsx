import React from 'react';

class AuthContext extends React.Component {
  state={
    isAuth: false
  };

  authHandler = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };
}