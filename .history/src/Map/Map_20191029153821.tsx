import React from 'react';

export interface MapProps {}
 
export interface MapState {}
 
class Map extends React.Component<MapProps, MapState> {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }
  render() { 
    // const style {
    //   position: 'absolute',
    //   top: 0,
    //   bottom: 0,
    //   width: '100%'
    };

    return ( <div>
        <h1>Map</h1>
    </div> 
    );
  }
}

ReactDOM.render(<Map />, document.getElementById('app'));
 
export default Map;