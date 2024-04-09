const searchForm = document.querySelector('.search-form');
const searchContainer = document.querySelector('.search-container');
const needServicesBtn = document.getElementById('need-services-btn');

needServicesBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('hidden');
});


searchForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(searchForm); // Get form data
  const budget = formData.get('budget');
  const location = formData.get('location');
  const roomType = formData.get('room-type');

  // Construct the request URL (replace "your-server.com" with the server that Kwame is using)
  const url = new URL('https://your-server.com/api/properties');
  url.searchParams.append('budget', budget);
  url.searchParams.append('location', location);
  url.searchParams.append('roomType', roomType);

  try {
    const response = await fetch(url.toString()); // Fetch data from server
    if (!response.ok) {
      throw new Error(`Error fetching listings: ${response.statusText}`);
    }
    const listingsData = await response.json(); // Parse JSON response
    displayListings(listingsData); // Call function to display listings
  } catch (error) {
    console.error('Error fetching listings:', error);
    // Handle errors by displaying an error message to the user (e.g., using alert or DOM manipulation)
  }
});

function displayListings(listingsData) {
  // ... the logic to iterate through listingsData and create HTML elements for each property using the template

  // Get the listings container element
  const listingsContainer = document.querySelector('.listings-container');

  // Remove the "hidden" class if data exists
  if (listingsData && listingsData.length > 0) {
    listingsContainer.classList.remove('hidden');
  } else {
    // Handle cases where no listings are found (optional: display a message)
    console.log("No listings found");
  }

  // ... populate the listings container with created elements (assuming you have logic for this)
}