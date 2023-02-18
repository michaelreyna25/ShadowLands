

// confirm password
// Create user 
// save user to database

const signup = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirm-password');
    const confirm = document.querySelector('.confirm');

  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };