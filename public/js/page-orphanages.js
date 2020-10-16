//CREATE MAP

var map = L.map('mapid').setView([-23.689235, -46.555756], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON

const icon = L.icon({
    iconUrl: "./public/img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//CREATE POPUP

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas<a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/img/arrow-white.svg"></a>')

//ADD MAP AND POPUP

L.marker([-23.689235, -46.555756], { icon })
    .addTo(map)
    .bindPopup(popup);