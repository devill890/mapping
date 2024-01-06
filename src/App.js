// App.js
import React, { useEffect, useState } from 'react';
import Map from './components/map';
import fetchGeoJSONData from './services/geoservices';
import findShortestPath from './services/shortestpathservices';
// import calculateVoronoi from './services/VoronoiService';

const App = () => {
  const [geoJSONData, setGeoJSONData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGeoJSONData();
        setGeoJSONData(data);

        // Implement logic for shortest path and Voronoi calculations here
        // For example:
        // const startPoint = { x: 1, y: 1 };
        // const endPoint = { x: 10, y: 10 };
        // const shortestPath = findShortestPath(data.grid, startPoint, endPoint);
        // const voronoiAreas = calculateVoronoi(data.points);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>React D3 Map</h1>
      {geoJSONData && <Map geoJSONData={geoJSONData} />}
      {/* Additional components for shortest path and Voronoi */}
    </div>
  );
};

export default App;

