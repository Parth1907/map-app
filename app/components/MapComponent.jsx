"use client";

import {MapContainer, TileLayer, Marker, useMap, Popup} from "react-leaflet";
import {useEffect, useState} from "react";

const markers = [
	{id: 1, position: [28.6139, 77.209], label: "New Delhi"},
	{id: 2, position: [19.076, 72.8777], label: "Mumbai"},
	{id: 3, position: [13.0827, 80.2707], label: "Chennai"},
	{id: 4, position: [22.5726, 88.3639], label: "Kolkata"},
	{id: 5, position: [12.9716, 77.5946], label: "Bangalore"},
];

function ChangeMapView({coords}) {
	const map = useMap();
	useEffect(() => {
		map.setView(coords, map.getZoom());
	}, [coords, map]);
	return null;
}

export default function MapComponent() {
	const [center, setCenter] = useState([19.076, 72.8777]);

	const handleMarkerClick = (position) => {
		setCenter(position);
	};

	return (
		<MapContainer
			center={center}
			zoom={5}
			style={{height: "100vh", width: "100%"}}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{markers.map((marker) => (
				<Marker
					key={marker.id}
					position={marker.position}
					eventHandlers={{
						click: () => handleMarkerClick(marker.position),
					}}
				>
					<Popup>{marker.label}</Popup>
				</Marker>
			))}
			<ChangeMapView coords={center} />
		</MapContainer>
	);
}
