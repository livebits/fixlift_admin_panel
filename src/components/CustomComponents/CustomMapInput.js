import React, { Component } from 'react';
import { addField } from 'react-admin';
import { Field } from 'redux-form';
import GoogleMapReact from 'google-map-react';
import { PlaceRounded } from '@material-ui/icons';
import { GOOGLE_MAP_API_KEY } from '../../constants/app';

const MarkerComponent = ({ text }) => <div style={markerStyle}><PlaceRounded /> {text}</div>;

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

const defaultProps = {
  center: {
    lat: 29.5926,
    lng: 52.5836
  },
  zoom: 15
};

const getLatitude = (value, defaultValue) => {
  return (value !== null && value !== "") ? value.split(":")[0] : defaultValue.split(":")[0];
}

const getLongitude = (value, defaultValue) => {
  return (value !== null && value !== "") ? value.split(":")[1] : defaultValue.split(":")[1];
}

const renderMapInput = ({ input, label, meta: { touched, error }, ...custom }) => (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      onClick={({ x, y, lat, lng, event }) => {

        input.onChange(`${lat}:${lng}`)
        
      }}
    >
      <MarkerComponent
        lat={getLatitude(input.value, custom.defaultValue)}
        lng={getLongitude(input.value, custom.defaultValue)}
        text=""
        position="top-right"
      />

    </GoogleMapReact>
);

const CustomMapInput = props => (
  <div style={{ height: '400px', width: '100%' }}>
    <Field {...props} name="location" component={renderMapInput} />
  </div>
);

export default CustomMapInput;