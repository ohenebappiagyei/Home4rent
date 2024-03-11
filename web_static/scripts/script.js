document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event fired");
    var regionsBtn = document.getElementById('regions-btn');
    var regionsList = document.getElementById('regions-list');

    regionsBtn.addEventListener('click', function () {
        console.log("Regions button clicked");
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
        console.log('Selected Region:', region)
    }
});