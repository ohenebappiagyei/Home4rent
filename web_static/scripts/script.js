document.addEventListener('DOMContentLoaded', function () {
    var regionsSelect = document.getElementById('regions-select');
    var budgetSelect = document.getElementById('budget-select');
    var propertySelect = document.getElementById('property-select');

    regionsSelect.addEventListener('change', fetchDataIfAllSelected);
    budgetSelect.addEventListener('change', fetchDataIfAllSelected);
    propertySelect.addEventListener('change', fetchDataIfAllSelected);

    function fetchDataIfAllSelected() {
        var selectedRegion = regionsSelect.value;
        var selectedBudget = budgetSelect.value;
        var selectedProperty = propertySelect.value;

        // Check if all three dropdowns have a selected value
        if (selectedRegion && selectedBudget && selectedProperty) {
            // Fetch data only when all three dropdowns are selected
            fetchAndDisplaySpaces(selectedRegion, selectedBudget, selectedProperty);
        }
    }

    function fetchAndDisplaySpaces(region, budget, property) {
        // Placeholder URL, replace with your actual backend API endpoint
        fetch(`https://example.com/api/spaces?region=${region}&budget=${budget}&property=${property}`)
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
            listItem.textContent = 'No spaces available with the selected criteria.';
            spacesList.appendChild(listItem);
        } else {
            spacesData.forEach(function (space) {
                var listItem = document.createElement('li');
                listItem.textContent = space.name; // Assuming the space object has a 'name' property
                spacesList.appendChild(listItem);
            });
        }
    }

    // Additional logic for viewing space details
    var viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    var spaceDetailsModal = document.getElementById('spaceDetailsModal');
    var spaceDetailsContent = document.getElementById('spaceDetailsContent');
    var closeBtn = document.querySelector('.close');

    if (viewDetailsBtns && spaceDetailsModal && spaceDetailsContent && closeBtn) {
        viewDetailsBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var spaceId = btn.closest('.property-card').dataset.spaceId;
                fetchSpaceDetails(spaceId);
            });
        });

        closeBtn.addEventListener('click', function () {
            spaceDetailsModal.style.display = 'none';
        });
    }

    function fetchSpaceDetails(spaceId) {
        // Placeholder URL, replace with your actual backend API endpoint
        fetch(`https://example.com/api/spaceDetails/${spaceId}`)
            .then(response => response.json())
            .then(spaceDetails => {
                displaySpaceDetails(spaceDetails);
                spaceDetailsModal.style.display = 'block';
            })
            .catch(error => console.error('Error fetching space details:', error));
    }

    function displaySpaceDetails(spaceDetails) {
        // Update the modal content with the fetched space details
        spaceDetailsContent.innerHTML = ''; // Clear previous content

        // Add your logic to format and display space details in the modal
        for (var key in spaceDetails) {
            if (spaceDetails.hasOwnProperty(key)) {
                var detailItem = document.createElement('p');
                detailItem.textContent = `${key}: ${spaceDetails[key]}`;
                spaceDetailsContent.appendChild(detailItem);
            }
        }
    }
});
