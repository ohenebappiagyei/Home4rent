const managePropertiesButton = document.querySelector("[data-target='manage-properties']");
const addPropertyButton = document.querySelector("[data-target='track-properties']");
const managePropertiesSection = document.getElementById("manage-properties");
const addPropertySection = document.getElementById("track-properties");

// Simulated Property Data (Replace with backend logic)
const properties = [
  {
    id: 1,
    title: "Spacious Apartment in Accra",
    imageUrl: "images/property1.jpg",
    shortDescription: "Modern 2-bedroom apartment with balcony and pool access.",
    // ... other property details
  },
  {
    id: 2,
    title: "Cozy Studio in Osu",
    imageUrl: "images/property2.jpg",
    shortDescription: "Well-maintained studio apartment in a vibrant neighborhood.",
    // ... other property details
  },
  // ... add more properties as needed
];

// Function to fetch properties data (replace with your backend call)
function fetchPropertiesData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(properties); // Simulate data retrieval after a delay
    }, 1000); // Simulate network latency
  });
}

// Function to update the UI with fetched properties
function updatePropertiesList(propertiesData) {
  const propertiesContainer = document.querySelector(".properties-container");
  propertiesContainer.innerHTML = ""; // Clear existing content (optional)

  propertiesData.forEach(property => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-3", "card"); // Add Bootstrap classes

    // Create elements for image, title, description, etc.
    const image = document.createElement("img");
    image.classList.add("card-img-top", "img-thumbnail");
    image.src = property.imageUrl;

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = property.title;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = property.shortDescription;

    // ... (Create elements for other details as needed)

    // Append elements to the card and container
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    // ... (Append other elements)
    propertiesContainer.appendChild(card);
  });
}

// Accordion Functionality
managePropertiesButton.addEventListener("click", async () => {
  managePropertiesSection.classList.toggle("show");
  addPropertySection.classList.remove("show");

  const propertiesData = await fetchPropertiesData();
  updatePropertiesList(propertiesData);
});

addPropertyButton.addEventListener("click", function() {
  addPropertySection.classList.toggle("show");
  managePropertiesSection.classList.remove("show");
});
