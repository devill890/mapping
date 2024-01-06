// services/GeoDataService.js
import axios from 'axios';

const fetchGeoJSONData = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions/ile-de-france/departements-ile-de-france.geojson');
    //  const response = await axios.get('https://static.observableusercontent.com/files/04fb9ff8d0c52895260d29a82d55b25ac325f3b25fdfd366d65c2f90880280036aa47a9114e8eb8dfd17d49497c201e13dd851ecf206c64430a87d46f8b1730f');
    return response.data;
  } catch (error) {
    console.error('Error fetching GeoJSON data:', error);
    throw error;
  }
};

export default fetchGeoJSONData;
