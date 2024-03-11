document.addEventListener('DOMContentLoaded', function () {
    // Regions
    var regionsSelect = document.getElementById('regions-select');
    regionsSelect.addEventListener('change', function () {
        var selectedRegion = regionsSelect.value;
        fetchAndDisplaySpaces(selectedRegion);
    });

    // Monthly Budget
    var budgetSelect = document.getElementById('budget-select');
    budgetSelect.addEventListener('change', function () {
        var selectedBudget = budgetSelect.value;
        fetchAndDisplaySpaces(selectedBudget);
    });

    // Property Type
    var propertySelect = document.getElementById('property-select');
    propertySelect.addEventListener('change', function () {
        var selectedProperty = propertySelect.value;
        fetchAndDisplaySpaces(selectedProperty);
    });

    // Function to fetch and display available spaces based on the selected parameter (region, budget, property)
    function fetchAndDisplaySpaces(parameter) {
        // Placeholder URL, replace with your actual backend API endpoint
        fetch(`https://example.com/api/spaces?${parameter}`)
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
            listItem.textContent = 'No spaces available in this category.';
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