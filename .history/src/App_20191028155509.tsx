import React from 'react';
import './App.css';
import Login from './Login';

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


