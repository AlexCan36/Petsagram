async function signUpUser(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

       // check the response status
    if (response.ok) {
        console.log('success');
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  async function loginUser(event) {
      event.preventDefault();

      const username = document.querySelector('#login-username').value.trim();
      const password = document.querySelector('#password-login').value.trim();

      if (username && password) {
          const response = await fetch('api/users/login', {
              method: 'post',
              body: JSON.stringify({
                  username,
                  password
              }),
              headers: { 'Content-Type': 'application/json' }
          });
          
        //   check response status
        if (response.ok) {
          document.location.replace('/profile');
        }
        else {
            alert(response.statusText);
        }
      }
  };
  
//   Event Listeners
  document.querySelector('.login-form').addEventListener('submit', loginUser);
  document.querySelector('.signup-form').addEventListener('submit', signUpUser);