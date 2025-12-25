const searchInput = document.getElementById('searchtext');
const suggestionsList = document.getElementById('suggestions');


const suggestionsData = [
    { name: "McDonalds", url: "restaurants.html" },
    { name: "Burger King", url: "restaurants.html" },
    { name: "Dominos", url: "restaurants.html" },
    { name: "Serena Hotels", url: "hotels.html" },
    { name: "PC Hotels", url: "hotels.html" },
    { name: "The 108 Hotels", url: "hotels.html" },
    { name: "Trail 5", url: "trails.html" },
    { name: "Trail 6", url: "trails.html" },
    { name: "Trail 7", url: "trails.html" }
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if (query === '') {
        suggestionsList.style.display = 'none';
        return;
    }

    const filtered = suggestionsData.filter(item => item.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
        suggestionsList.style.display = 'none';
        return;
    }

    filtered.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.style.padding = '5px';
        li.style.cursor = 'pointer';


        li.addEventListener('click', () => {
            window.location.href = item.url;
        });

        suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = 'block';
});


document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.style.display = 'none';
    }
});
