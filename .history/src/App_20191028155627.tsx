import React from 'react';
import './App.css';
import Login from './Login/Login';
import Map from './Map/Map';

export interface AppProps {}
 
export interface AppState {}
 
class App extends React.Component<AppProps, AppState> {
  state = {
    path: 'login'
  }

  setPath = (path: string) => {
    this.setState({ path });
  };
  render() { 
    return ( <div></div> );
  }
}
 
export default App;


