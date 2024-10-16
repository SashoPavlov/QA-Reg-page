const seePass = document.getElementById('togglePassword').addEventListener('click', (e) => {
    const passwordInput = document.getElementById('floatingPassword');

    if (passwordInput.type === 'password') {
      
      passwordInput.type = 'text';
      
      // moje da se izpolzva i 'this' ako ne e arrow func
      e.target.classList.remove('fa-eye-slash');
      e.target.classList.add('fa-eye');
    } else {
      
      passwordInput.type = 'password';
      
      // moje da se izpolzva i 'this' ako ne e arrow func
      e.target.classList.remove('fa-eye');
      e.target.classList.add('fa-eye-slash');
    }
  });
