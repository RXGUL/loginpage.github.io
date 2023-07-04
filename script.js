function submitForm(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Send a POST request to the login API endpoint
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.ok) {
        // Login successful
        document.getElementById('message').textContent = 'Login successful!';
      } else {
        // Login failed
        document.getElementById('message').textContent = 'Login failed. Please check your email and password.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('message').textContent = 'An error occurred. Please try again later.';
    });
  }
  function submitForm(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
  
    
    document.getElementById('message').textContent = `A password reset link will be sent to ${email}.`;
    
    document.getElementById('email').value = '';
  }
  