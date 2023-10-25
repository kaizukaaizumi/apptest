import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"

const LeafletMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeMap = async () => {
            try {
                if (mapRef.current) {
                    const map = L.map(mapRef.current).setView([21.306944, -157.858337], 13);
                    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution:
                            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                        maxZoom: 18,
                    }).addTo(map);
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