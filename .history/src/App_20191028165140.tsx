import React from 'react';
import './App.css';
import Login from './Login';
import Map from './Map';
import Profile from './Profile';
import Nav from './Nav';

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
        return <Login />;
    }
  };

  render() { 
    return <div>
      <Nav setPath={this.setPath}
    </div> ;
  }
}
 
export default App;


