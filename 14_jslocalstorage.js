const form=document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;

    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
})