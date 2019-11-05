import React, { useContext } from 'react';
import './App.css';
import Login from './Login';
import Map from './Map';
import Profile from './Profile';
import Nav from './Nav';
import PropTypes from 'prop-types';
import { AuthProvider, AuthContext } from './Auth.Context';

export interface AppProps {}
 
export interface AppState {}
 
class App extends React.Component<AppProps, AppState> {
  state = {
    path: 'login'
  }

  setPath = (path: string) => {
    this.setState({ path });
  };

  setComponent = () => {
    const { path } = this.state;
    switch (path) {
      case "map":
        return <Map />;
      case "profile":
        return <Profile />;
      
      default:
        return <Login setPath={this.setPath}/>;
    }
  };

  render() { 
    const { path } = this.state;
    return <div>
      {path !== "login" && <Nav setPath={this.setPath}></Nav>}
      <div>{this.setComponent()}</div>
    </div> ;
      // {
      //   <AuthProvider>
      //     <AudioContext.Consumer>
      //       {({ is.Auth, authHandler }) => (
      //       <div>{isAuth ? <div>Залогинем</div> : <div>Не залогинен</div>}
      //       <button onClick={() => AuthHandler()}>Нажми на меня!</button></div>
      //       )}
      //     </AudioContext.Consumer>
      //   </AuthProvider>
      // }
    }
  }

const
 
export default App;


