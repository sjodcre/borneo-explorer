// components/Map.tsx

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41], // Size of the shadow
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([3.158421810323094, 101.71206843887117], 13);

    // Add OSM tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker at your shop's location
    L.marker([3.158421810323094, 101.71206843887117])
      .addTo(map)
      .bindPopup('Lingering Coffee')
      .openPopup();
  }, []);

  return (
    <div
      id="map"
      className="w-full h-96" // Tailwind CSS classes for width and height
    />
  );
};

export default Map;
