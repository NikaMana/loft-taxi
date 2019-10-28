import React from 'react';
import Nav from '../Nav'

export interface MapProps {}
 
export interface MapState {}
 
class Map extends React.Component<MapProps, MapState> {
  state = { }
  render() { 
    return ( <div>
        <h1>Map</h1>
        <Nav />
    </div> 
    );
  }
}
 
export default Map;