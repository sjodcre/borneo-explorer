// components/Map.tsx

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
  const center: [number, number] = [3.158421810323094, 101.71206843887117]; // Define the center coordinates as a tuple

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map('map').setView(center, 13);

      // Add OSM tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapRef.current);

      // Add a marker at your shop's location
      L.marker(center).addTo(mapRef.current).bindPopup('Lingering Coffee').openPopup();

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
        ">Reset</button>`;
        div.onclick = () => {
          if (mapRef.current) {
            mapRef.current.setView(center, 13); // Reset the view to the center and default zoom
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="map"
      className="w-full h-96 z-0"
    />
  );
};

export default Map;
