//CREATE MAP

var map = L.map('mapid').setView([-23.71899, -46.5428036], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON

const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

const spans = document.querySelectorAll(".orphanages span");

spans.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    
    addOrphanage(orphanage);
});

function addOrphanage({id, name, lat, lng}) {
    //CREATE POPUP
    
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name}<a href="/orphanage?id=${id}" class="choose-orphanage"><img src="/img/arrow-white.svg"></a>`)
    
    //ADD MAP AND POPUP
    
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup);
}