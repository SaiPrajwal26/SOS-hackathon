// JavaScript to display registered agencies (simplified example)

// Sample data for registered agencies (replace with real data)
const agencies = [
    { name: "Agency A", latitude: 40.7128, longitude: -74.0060 },
    { name: "Agency B", latitude: 34.0522, longitude: -118.2437 },
    // Add more agencies here
];

// Function to initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    });

    // Display agency markers on the map
    agencies.forEach((agency) => {
        const marker = new google.maps.Marker({
            position: { lat: agency.latitude, lng: agency.longitude },
            map: map,
            title: agency.name,
        });
    });
}

// Function to display agencies in the list
function displayAgencies() {
    const agencyList = document.getElementById("agencyList");

    agencies.forEach((agency) => {
        const listItem = document.createElement("li");
        listItem.textContent = agency.name;
        agencyList.appendChild(listItem);
    });
}

// Call the functions to display agencies
displayAgencies();
