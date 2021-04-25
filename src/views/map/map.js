import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={14}
			></Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDrDJWxQKptKg4IbbDeEJy0OmgTgniNt0A',
})(MapContainer);
