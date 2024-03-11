document.addEventListener('DOMContentLoaded', function () {
    // Regions
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

    // Budget
    var budgetBtn = document.getElementById('budget-btn');
    var budgetList = document.getElementById('budget-list');

    budgetBtn.addEventListener('click', function () {
        // Toggle the visibility of the budget list
        budgetList.classList.toggle('visible');
    });

    budgetList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Handle the click on a budget
            var selectedBudget = event.target.dataset.budget;
            // Call a function to fetch and display spaces for the selected budget
            fetchAndDisplaySpaces(selectedBudget);
        }
    });

    // Property Type
    var propertyBtn = document.getElementById('property-btn');
    var propertyList = document.getElementById('property-list');

    propertyBtn.addEventListener('click', function () {
        // Toggle the visibility of the property list
        propertyList.classList.toggle('visible');
    });

    propertyList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Handle the click on a property type
            var selectedProperty = event.target.dataset.property;
            // Call a function to fetch and display spaces for the selected property type
            fetchAndDisplaySpaces(selectedProperty);
        }
    });

    // Function to fetch and display available spaces for a given parameter (region, budget, property)
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
