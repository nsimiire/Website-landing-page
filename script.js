 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show sign-up form
function showForm() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('signup-form').scrollIntoView({ behavior: 'smooth' });
}

// Form validation
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        alert('Form submitted successfully!');
        document.getElementById('signup-form').style.display = 'none';
    } else {
        alert('Please fill in all fields.');
    }
}