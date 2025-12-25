
function openLogin() {
    const login = document.getElementById("acc_created");
    login.style.display = "block";


    setTimeout(() => {
        login.classList.add("active");
    }, 10);
}

function closeLogin() {
    const login = document.getElementById("acc_created");
    login.classList.remove("active");

    setTimeout(() => {
        login.style.display = "none";
    }, 400);
}

function notification() {
    alert("Account Created Sucessfully!");
}


function initMap() {


    const pakistan = { lat: 30.3753, lng: 69.3451 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: pakistan,
        zoom: 5
    });

    const restaurants = [

        { name: "Burger King - Lahore", lat: 31.5204, lng: 74.3587 },
        { name: "Burger King - Karachi", lat: 24.8607, lng: 67.0011 },
        { name: "Burger King - Islamabad", lat: 33.6844, lng: 73.0479 },
        { name: "McDonald's - Lahore", lat: 31.5497, lng: 74.3436 },
        { name: "McDonald's - Karachi", lat: 24.8138, lng: 67.0290 },
        { name: "McDonald's - Islamabad", lat: 33.6938, lng: 73.0652 },
        { name: "Domino's - Lahore", lat: 31.5226, lng: 74.3531 },
        { name: "Domino's - Karachi", lat: 24.8719, lng: 67.0565 },
        { name: "Domino's - Islamabad", lat: 33.7075, lng: 73.0491 }
    ];

    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"

    restaurants.forEach(place => {
        new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name
        });
    });
}


