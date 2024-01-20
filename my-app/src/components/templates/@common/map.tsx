'use client' // top to the file

import L from 'leaflet'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import markerIconUrl from 'leaflet/dist/images/marker-icon.png'
import markerIcon2xUrl from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png'

// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
	iconUrl: require('leaflet/dist/images/marker-icon.png').default,
	shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
})

export default function Map(props: any): JSX.Element {
	const {latitude, longitude, zoom} = props

	const position: any[] = [latitude, longitude]

	const mapStyle = {
		width: '100%',  // Set the width of the map
		height: '20em', // Set the height of the map
	}

	const markerIcon = L.icon({
		iconUrl: markerIconUrl.src,
		iconRetinaUrl: markerIcon2xUrl.src,
		shadowUrl: markerShadowUrl.src,
		iconSize: [25, 41], // Set the size of the marker icon
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize: [41, 41],
	})

	return (
		<MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={mapStyle}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} icon={markerIcon}>
				<Popup>
					A pretty CSS3 popup. <br/> Easily customizable
				</Popup>
			</Marker>
		</MapContainer>
	)
}
