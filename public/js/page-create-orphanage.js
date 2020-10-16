//CREATE MAP

var map = L.map('mapid').setView([-23.689235, -46.555756], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//CREATE ICON

const icon = L.icon({
    iconUrl: "./public/img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

//CREATE AND ADD MARKER

let marker;

map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector(".map-container input[name=lat]").value = lat;
    document.querySelector(".map-container input[name=lng]").value = lng;

    marker && map.removeLayer(marker);

    marker = L.marker([lat, lng], {icon}).addTo(map);
});

//ADD NEW UPLOAD INPUT

document.querySelector(".input-block.images button").addEventListener("click", addPhotoField);

function addPhotoField() {
    const photosContainer = document.querySelector(".images-upload");
    const inputs = document.querySelectorAll(".new-upload");
    const duplicatedInput = inputs[inputs.length - 1].cloneNode(true);
    const childInput = duplicatedInput.children[0]; 

    if (childInput.value == "") {

        return alert("Preencha o campo anterior antes de inserir outro.");
    }

    duplicatedInput.children[0].value = "";

    photosContainer.appendChild(duplicatedInput);
}

//DELETE UPLOAD INPUT

function deletePhotoField(event) {
    const inputs = document.querySelectorAll(".new-upload input");
    const clickedSpan = event.currentTarget;

    if (inputs.length <= 1) {
        return clickedSpan.parentNode.children[0].value = "";
    }

    clickedSpan.parentNode.remove();
}

const weekendButton = document.querySelectorAll(".button-select button");

weekendButton.forEach(button => button.addEventListener("click", toggleButton));

function toggleButton(event) {
    const clickedButton = event.currentTarget;
    const weekendInput = document.querySelector(".input-block input[name=open_on_weekend]");

    weekendButton.forEach(button => button.classList.remove("yes", "no"));

    weekendInput.value = clickedButton.dataset.value;

    const yesOrNo = weekendInput.value == "1" ? "yes" : "no";

    clickedButton.classList.add(`${yesOrNo}`);
}