import React from 'react';
import './App.css';

export interface AppState {
  path: string;
}
 
class App extends React.Component<null, AppState> {
  state = {
    path: 'login'
  }
  render() { 
    return ( <div></div> );
  }
}
 
export default App;


