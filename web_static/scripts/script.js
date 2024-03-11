document.addEventListener('DOMContentLoaded', function () {
    var regionsBtn = document.getElementById('regions-btn');
    var regionsList = document.getElementById('regions-list');
    var spacesList = document.getElementById('spaces-List');

    regionsBtn.addEventListener('click', function () {
        // Toggle the visibility of the regions list
        if (regionsList.style.display === 'none') {
            regionsList.style.display = 'block';
        } else {
            regionsList.style.display = 'none';
        }
    });

    regionsList.addEventListener('click', function (event) {
        // Check if a region item is clicked
        if (event.target.tagName === 'LI') {
            var selectedRegion = event.target.getAttribute('data-region');
            // Fetch and display available spaces for the selected region
            fetchSpacesForRegion(selectedRegion);
        }
    });

    // Function to fetch and display available spaces for a region
    function fetchSpacesForRegion(region) {
        // Waiting for Kwame's database logic for backend
        // However, as a placeholder, I am using an API URL
        var apiUrl = 'url' + encodeURIComponent(region);

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Update the spaces list with the fetched data
                updateSpacesList(data);
            })
            .catch(error => {
                console.error('Error fetching spaces:', error);
            });
    }
    // Function to update the spaces list in the UI
    function updateSpacesList(spaces) {
        // Clear the existing list
        spacesList.innerHTML = '';

        // Populate the spaces list with the fetched data
        spaces.forEach(space => {
            var spaceItem = document.createElement('li');
            spaceItem.textContent = space.name // When Kwame is done, I will replace with the actual property details
            spacesList.appendChild(spaceItem);
        });

        // Display the spaces list
        spacesList.style.display = 'block';
    }
});

