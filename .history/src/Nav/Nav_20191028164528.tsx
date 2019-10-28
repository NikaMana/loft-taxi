import React from 'react';

const buttons = [
  {path: 'map'},
  {path: 'profile'},
  {path: 'login'}
]

export interface NavProps {}
 
export interface NavState {}
 
class Nav extends React.Component<NavProps, NavState> {
  state = { }
  render() { 
    return <div>
      <ul>
        {buttons.map(el => (
        <li key={el.path}>
            <button type="button"></button>
        </li>
        ))}
      </ul>
    </div>;
  }
}
 
export default Nav;