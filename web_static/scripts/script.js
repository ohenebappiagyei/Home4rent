document.addEventListener('DOMContentLoaded', function () {
    var regionsBtn = document.getElementById('regions-btn');
    var regionsList = document.getElementById('regions-list');

    regionsBtn.addEventListener('click', function () {
        // Toggle the visibility of the regions list
        regionsList.classList.toggle('visible');
    });

    regionsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Handle the click on a region
            var selectedRegion = event.target.dataset.region;
            // Call a function to fetch and display spaces for the selected region
            fetchAndDisplaySpaces(selectedRegion);
        }
    });

    // Function to fetch and display available spaces for a region
    function fetchAndDisplaySpaces(region) {
        // Waiting for Kwame's database logic for backend
        // In the meantime, this is a placeholder for the actual backend API call
        // Simulate fetching data from the backend based on the selected region
        fetch(`https://example.com/api/spaces?region=${region}`)
            .then(response => response.json())
            .then(spacesData => {
                // Display the fetched spaces data
                displaySpaces(spacesData);
            })
            .catch(error => console.error('Error fetching spaces:', error));
    }
        
    function displaySpaces(spacesData) {
        var spacesList = document.getElementById('spaces-list');
        spacesList.innerHTML = ''; // Clear the current list
        
        if (spacesData.length === 0) {
            var listItem = document.createElement('li');
            listItem.textContent = 'No spaces available in this region.';
                spacesList.appendChild(listItem);
            } else {
            spacesData.forEach(function (space) {
                var listItem = document.createElement('li');
                listItem.textContent = space.name; // Assuming the space object has a 'name' property
                spacesList.appendChild(listItem);
            });
        }
    }
});