import React from 'react';
import './App.css';
import Login from './Login';
import Map from './Map';
import Profile from './Profile';

export interface AppProps {}
 
export interface AppState {}
 
class App extends React.Component<AppProps, AppState> {
  state = {
    path: 'profile'
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
        return <Login />;
    }
  };

  render() { 
    return <div>{this.setComponent()}</div> ;
  }
}
 
export default App;


