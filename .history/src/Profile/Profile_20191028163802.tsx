import React from 'react';
import Nav from '../Nav';

export interface ProfileProps {}
 
export interface ProfileState {}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
  state = { }
  render() { 
    return ( <div>
        <h1>Profile</h1>
        <Nav />
    </div> );
  }
}
 
export default Profile;