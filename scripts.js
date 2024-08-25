// Select elements
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');

const container = document.getElementById('container');



signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    signInButton.textContent = 'Sign In';

});

signInButton.addEventListener('click', () => {
    
    container.classList.remove('right-panel-active');
    signUpButton.textContent = 'SIGN UP';
   

});


document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    alert(`Signup successful!\nName: ${name}\nEmail: ${email}`);

    
    container.classList.remove('right-panel-active');
  
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // TODO: Add login logic
    alert(`Login successful!\nEmail: ${email}`);
});
