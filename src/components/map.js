// // components/Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

const Map = () => {
  const [geoJSONData, setGeoJSONData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example GeoJSON data endpoint
        const response = await axios.get('https://example.com/your-geojson-endpoint');

        // Check if the API response contains valid GeoJSON data
        if (response.data && response.data.features) {
          setGeoJSONData(response.data);
        } else {
          console.error('Invalid GeoJSON data received:', response.data);
          // Set default location (e.g., Kolkata) if data is invalid or missing
          setDefaultLocation();
        }
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
        // Set default location (e.g., Kolkata) in case of an error
        setDefaultLocation();
      }
    };

    fetchData();
  }, []);

  const setDefaultLocation = () => {
    // Set default location (e.g., Kolkata)
    setGeoJSONData(null); // Clear any previously set GeoJSON data
  };

  const center = [59.958, 9.141];
  const zoom = 10;

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoJSONData && <GeoJSON data={geoJSONData} />}

      <Marker position={center} />
    </MapContainer>
  );
};

export default Map;
