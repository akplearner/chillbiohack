document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if(email) {
        alert('Thank you for signing up!');
        this.reset();
    }
});
