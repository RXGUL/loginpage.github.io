function submitForm(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  
  document.getElementById('message').textContent = `A password reset link will be sent to ${email}.`;
  

  
  document.getElementById('email').value = '';
}
