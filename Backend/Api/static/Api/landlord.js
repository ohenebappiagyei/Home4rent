const buttons = document.querySelectorAll('.button-container button');
const contentSections = document.querySelectorAll('.content-section');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSectionId = button.dataset.target;
    const targetSection = document.getElementById(targetSectionId);
    
    // Remove "active" class from all buttons before handling click
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add "active" class to the clicked button
    button.classList.add('active');
    
    // Hide all content sections
    contentSections.forEach(section => section.classList.add('hidden'));
    
    // Show the clicked button's target section
    targetSection.classList.remove('hidden');
    
    // Handle edit property button click (replace with your logic)
    if (targetSectionId === 'edit-property') {
      // Fetch property data and populate the form (call populateEditForm)
      const propertyData = fetchPropertyData(/* property ID */); // Replace with your logic
      populateEditForm(propertyData);
    }
  });
});

// Set the first button as active initially (optional)
buttons[0].classList.add('active');

// Function to populate the "Manage Properties" section with frame containers
function populateProperties(propertiesData) {
  const managePropertiesSection = document.getElementById('track-properties');

  // Clear any existing content
  managePropertiesSection.innerHTML = '';

  // Loop through each property data and create a frame container for each
  propertiesData.forEach(property => {
    const frameContainer = document.createElement('div');
    frameContainer.classList.add('frame-container');

    // Create elements for location, price, and short description
    const location = document.createElement('p');
    location.textContent = 'Location: ' + property.location;

    const price = document.createElement('p');
    price.textContent = 'Price: ' + property.price;

    const description = document.createElement('p');
    description.textContent = 'Description: ' + property.description;

    // Append location, price, and description to frame container
    frameContainer.appendChild(location);
    frameContainer.appendChild(price);
    frameContainer.appendChild(description);

    // Append frame container to manage properties section
    managePropertiesSection.appendChild(frameContainer);
  });
}

// Example property data (replace with actual data fetched from server)
const examplePropertiesData = [
  {
    location: '10 Hickory St, East Legon, Accra',
    price: '1500/month',
    description: 'This is a sample short description'
  },
  {
    location: '5 Watermelon St, East Legon, Accra',
    price: '1000/month',
    description: 'This is a sample short description'
  }
];

// Populate the "Manage Properties" section with example data
// populateProperties(examplePropertiesData);

// Function to populate the "Track Applications" section with frame containers
function populateApplications(applicationsData) {
  const trackApplicationsSection = document.getElementById('track-applications');

  // Clear any existing content
  trackApplicationsSection.innerHTML = '';

  // Loop through each application data and create a frame container for each
  applicationsData.forEach(application => {
    const frameContainer = document.createElement('div');
    frameContainer.classList.add('frame-container');

    // Create elements for applicant name, property, and status
    const applicantName = document.createElement('p');
    applicantName.textContent = 'Applicant: ' + application.applicantName;

    const propertyName = document.createElement('p');
    propertyName.textContent = 'Property: ' + application.propertyName;

    const status = document.createElement('p');
    status.textContent = 'Status: ' + application.status;

    // Append applicant name, property, and status to frame container
    frameContainer.appendChild(applicantName);
    frameContainer.appendChild(propertyName);
    frameContainer.appendChild(status);

    // Append frame container to track applications section
    trackApplicationsSection.appendChild(frameContainer);
  });
}

// Example applications data (to be replaced with actual data fetched from server)
const exampleApplicationsData = [
  {
    applicantName: 'Prince Osei',
    propertyName: '11 Hickory St',
    status: 'Pending'
  },
  {
    applicantName: 'Jane Doe',
    propertyName: '12 East Legon Extension',
    status: 'Approved'
  }
];

// Populate the "Track Applications" section with example data
populateApplications(exampleApplicationsData);