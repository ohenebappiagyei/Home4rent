// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Fetch property data when clicking on a room type link
        if (target.id === 'portfolio') {
            const roomType = this.textContent.trim(); // Extract room type from link text
            fetch(`/api/properties?type=${roomType.toLowerCase()}`)
                .then(response => response.json())
                .then(data => {
                    // Update HTML content with fetched property data
                    const cardsContainer = document.querySelector('.cards');
                    cardsContainer.innerHTML = ''; // Clear existing content
                    data.forEach(property => {
                        const card = document.createElement('li');
                        card.className = 'card';
                        card.innerHTML = `
                            <img src="${property.image}" alt="img">
                            <h3>${property.name}</h3>
                            <p>${property.description}</p>
                        `;
                        cardsContainer.appendChild(card);
                    });
                })
                .catch(error => {
                    console.error('Error fetching property data:', error);
                });
        }
    });
});