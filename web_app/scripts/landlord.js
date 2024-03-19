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
    location: '5 Watermelon St, East Legon, Acccra',
    price: '1000/month',
    description: 'This is a sample short description'
  }
];

// Populate the "Manage Properties" section with example data
populateProperties(examplePropertiesData);

// Fetch applications from the backend
function fetchApplications() {
  // Make a fetch request to your backend endpoint to get applications data
  fetch('/api/applications')
    .then(response => response.json())
    .then(data => {
      // Populate applications section with fetched data
      populateApplications(data);
    })
    .catch(error => console.error('Error fetching applications:', error));
}


// Function to populate the "Track Applications" section with frame containers
function populateApplications(applicationsData) {
  const trackApplicationsSection = document.getElementById('applications-list');

  // Clear any existing content
  trackApplicationsSection.innerHTML = '';

  // Loop through each application data and create a container for each
  applicationsData.forEach(application => {
    const applicationContainer = document.createElement('div');
    applicationContainer.classList.add('application-container');

    // Display applicant name, property, and status
    const applicantName = document.createElement('p');
    applicantName.textContent = 'Applicant: ' + application.applicantName;

    const propertyName = document.createElement('p');
    propertyName.textContent = 'Property: ' + application.propertyName;

    const status = document.createElement('p');
    status.textContent = 'Status: ' + application.status;

    // Display approve and decline buttons
    const approveButton = document.createElement('button');
    approveButton.textContent = 'Approve';
    approveButton.addEventListener('click', () => {
      // Call a function to handle approval action
      handleApproval(application.id);
    });

    const declineButton = document.createElement('button');
    declineButton.textContent = 'Decline';
    declineButton.addEventListener('click', () => {
      // Call a function to handle decline action
      handleDecline(application.id);
    });

    // Append elements to application container
    applicationContainer.appendChild(applicantName);
    applicationContainer.appendChild(propertyName);
    applicationContainer.appendChild(status);
    applicationContainer.appendChild(approveButton);
    applicationContainer.appendChild(declineButton);

    // Append application container to track applications section
    trackApplicationsSection.appendChild(applicationContainer);
  });
}

// Function to handle approving an application
function handleApproval(applicationId) {
  // Make a request to your backend to approve the application
  fetch(`/api/applications/${applicationId}/approve`, { method: 'POST' })
    .then(() => {
      // Optionally, update UI or fetch applications again
      fetchApplications();
    })
    .catch(error => console.error('Error approving application:', error));
}

// Function to handle declining an application
function handleDecline(applicationId) {
  // Make a request to your backend to decline the application
  fetch(`/api/applications/${applicationId}/decline`, { method: 'POST' })
    .then(() => {
      // Optionally, update UI or fetch applications again
      fetchApplications();
    })
    .catch(error => console.error('Error declining application:', error));
}

// Populate applications initially
fetchApplications();
