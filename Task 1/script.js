document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            console.log({ name, email, message });
            document.getElementById('successMessage').style.display = 'block';
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('All fields are required.');
    }
});
