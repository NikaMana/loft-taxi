import React from 'react';

const buttons = [
  {path: 'map'},
  {path: 'profile'},
  {path: 'login'}
]

export interface NavProps {
  setPath: (path: string) => void;
}
 
export interface NavState {}
 
class Nav extends React.Component<NavProps, NavState> {
  state = { }
  render() { 
    const {setPath} = this.props;
    return <div>
      <ul>
        {buttons.map(el => (
        <li key={el.path}>
            <button type="button" onClick={() => setPath(el.path)}>{el.path}</button>
        </li>
        ))}
      </ul>
    </div>;
  }
}
 
export default Nav;