const signup = async (event) => {
  event.preventDefault();

  // Find the email, password, and confirm password input elements
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');

  // Check if all four input elements exist
  if (username && email && password && confirmPassword) {

    // If they all exist, send a POST request to the /api/users endpoint with the email and password
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If the response is OK, redirect the user to the selectChar page
    if (response.ok) {
      document.location.replace('/selectChar');
    } else {
      // If the response is not OK, show an alert with the status text
      alert(response.statusText);
    }
  }
};

// Try to find an element with the class 'confirm' and add an event listener to it
const confirmButton = document.querySelector('#confirm');
if (confirmButton) {
  confirmButton.addEventListener('click', signup);
}
