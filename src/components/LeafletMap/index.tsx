import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"

const LeafletMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeMap = async () => {
            try {
                if (mapRef.current) {
                    let map = L.map(mapRef.current).setView([21.306944, -157.858337], 13);
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution:
                            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                        maxZoom: 18,
                    }).addTo(map);
                    const marker = L.marker([21.306944, -157.858337]).addTo(map);
                    const circle = L.circle([21.306944, -157.858337], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: 500
                    }).addTo(map);
                    const polygon = L.polygon([
                        [21.306944, -157.858337],
                        [21.4, -157.7],
                        [21.5, -157.9]
                    ]).addTo(map);
                    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
                    circle.bindPopup("I am a circle.");
                    polygon.bindPopup("I am a polygon.");
                    const popup = L.popup();

                    function onMapClick(e) {
                        popup
                            .setLatLng(e.latlng)
                            .setContent("You clicked the map at " + e.latlng.toString())
                            .openOn(map);
                    }

                    map.on('click', onMapClick);
                }
            } catch (error) {
                console.log("Error initializing map:", error);
            }
        };

        initializeMap();
    }, []);

    return <div ref={mapRef} style={{ height: "800px" }}></div>;
};

export default LeafletMap;