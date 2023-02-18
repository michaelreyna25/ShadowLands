

// confirm password
// Create user 
// save user to database

const signup = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirm-password');
  

    if (email && password && confirmPassword) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/selectChar');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.confirm').addEventListener('click', signup);