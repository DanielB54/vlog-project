let signupFormHandler = async (event) => {
  event.preventDefault();


  const email = document.querySelector('#email-create').value.trim();
  const password = document.querySelector('#password-create').value.trim();

  if (email && password && username) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to signup.');
    }
  }
};
