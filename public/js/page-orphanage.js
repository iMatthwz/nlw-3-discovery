//MAP OPTIONS

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//CREATE MAP

const span = document.querySelector(".map-container span");
const lat = span.dataset.lat;
const lng = span.dataset.lng;

var map = L.map('mapid', options).setView([lat, lng], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE AND ADD ICON

const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

L.marker([lat, lng], { icon }).addTo(map);

//IMAGE GALLERY

const buttons = document.querySelectorAll("div.images button");

buttons.forEach(button => button.addEventListener("click", selectImage))

function selectImage(event) {
    const selectedButton = event.currentTarget;
    const selectedImageSrc = selectedButton.children[0].src;
    const imageContainer = document.querySelector(".orphanage-details img");

    buttons.forEach(button => button.classList.remove("active"))

    selectedButton.classList.add("active");

    imageContainer.src = selectedImageSrc;
}