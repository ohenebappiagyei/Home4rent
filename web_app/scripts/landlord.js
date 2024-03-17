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
