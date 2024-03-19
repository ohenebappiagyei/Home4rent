// Signup form submission (signup form has an ID of "signup-form")
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Handle user signup logic here (store data in server database when Kwame is done)

  // After successful signup, redirect to login page display
  window.location.href = 'login.html'; 

// Login form submission (assuming your login form has an ID of "login-form")
const loginForm = document.getElementById('login-form');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get username/email and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Implement login logic here (check credentials against stored data - local storage or server)
  // You can use localStorage or cookies to store user data after successful login

  // Handle successful login and redirect to appropriate dashboard based on user type
  // For example, redirect to "landlord-dashboard.html" or "tenant-dashboard.html"

  // Display error message if login fails
  alert('Invalid username/password combination!');
});