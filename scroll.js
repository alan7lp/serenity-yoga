document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    // Get the form element by its ID
    var form = document.getElementById('contact-form');
    // Add an event listener to the form's submit event
    form.addEventListener('submit', function(){
        // Reset the form after a delay to ensure the form data is sent first
        setTimeout(function() {
            form.reset();
        }, 100);
    });
});
