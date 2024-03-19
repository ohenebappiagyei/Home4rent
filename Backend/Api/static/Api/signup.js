const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;  // Hash password before sending
  const user_type = document.getElementById('user_type').value;
  const national_id = document.getElementById('national_id').value;

  const userObj = {
    username,
    email,
    password,
    user_type,
    national_id,
  };

  // Send user data as JSON to server-side signup endpoint (e.g., using fetch API)
  fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userObj),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Signup successful, redirect to login page
        window.location.href = 'login.html?success=true';
      } else {
        // Handle signup errors
        alert('Registration Failed! ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during signup!');
    });
});