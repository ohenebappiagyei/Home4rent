const searchForm = document.querySelector('.search-form');

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

// Implement this function to handle displaying listings and potentially adding a loading indicator during the fetch process
function displayListings(listingsData) {
  // ... your logic to iterate through listingsData and create HTML elements for each property using the template
  // ... I will add a loading indicator while fetching data
}
