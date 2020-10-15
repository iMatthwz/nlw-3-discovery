/* MAP */

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

var map = L.map('mapid', options).setView([-23.689235, -46.555756], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./public/img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

L.marker([-23.689235, -46.555756], { icon }).addTo(map);

/* IMAGE GALLERY */

const buttons = document.querySelectorAll("div.images button");

buttons.forEach((button) => {
    button.addEventListener("click", selectImage);
})

function selectImage(event) {
    const selectedButton = event.currentTarget;
    const selectedImageSrc = selectedButton.children[0].src;
    const imageContainer = document.querySelector(".orphanage-details img");

    buttons.forEach((button) => {
        button.classList.remove("active");
    })

    selectedButton.classList.add("active");

    imageContainer.src = selectedImageSrc;
}