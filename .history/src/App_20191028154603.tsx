import React from 'react';
import './App.css';

export interface AppProps {
  
}
 
export interface AppState {
  
}
 
class App extends React.Component<AppProps, AppState> {
  state = {
    path: 'login'
  }
  render() { 
    return ( <div></div> );
  }
}
 
export default App;


