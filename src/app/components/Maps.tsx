import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  // Sipadan Island coordinates
  const center: [number, number] = [4.1128, 118.6289];
  // Semporna port coordinates (starting point)
  const portLocation: [number, number] = [4.4778, 118.6181];

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map('map').setView(center, 10);

      // Add OSM tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapRef.current);

      // Add markers for key locations
      L.marker(center).addTo(mapRef.current)
        .bindPopup('Sipadan Island - World Class Dive Sites').openPopup();
      
      L.marker(portLocation).addTo(mapRef.current)
        .bindPopup('Semporna Port - Departure Point');

      // Add a line showing typical route
      const route = L.polyline([portLocation, center], {
        color: 'blue',
        weight: 2,
        opacity: 0.6,
        dashArray: '5, 10'
      }).addTo(mapRef.current);

      // Add custom reset button
      const resetControl = new L.Control({ position: 'topright' });
      resetControl.onAdd = () => {
        const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        div.innerHTML = `<button style="
          background-color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 14px;
        ">Reset View</button>`;
        div.onclick = () => {
          if (mapRef.current) {
            mapRef.current.setView([4.2953, 118.6235], 10); // View showing both points
          }
        };
        return div;
      };
      resetControl.addTo(mapRef.current);
    }

    // Cleanup map on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      id="map"
      className="w-full h-96 z-0 rounded-lg shadow-lg"
    />
  );
};

export default Map;