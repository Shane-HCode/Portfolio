document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(e) {
        // Prevent the actual form submission/page reload
        e.preventDefault();

        // Get values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Display the success message
        formResponse.textContent = `Thank you, ${name}! Your message has been received. I will get back to you at ${email} soon.`;
        formResponse.classList.remove('hidden');
        formResponse.classList.add('success');

        // Clear the form fields
        contactForm.reset();

        // Optional: Hide the message after 10 seconds
        setTimeout(() => {
            formResponse.classList.add('hidden');
            formResponse.classList.remove('success');
        }, 10000);
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('#navbar nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        nav.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
        });
    });
});