
// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }

});

// Contact Form Interaction
const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";

    } else {

        // Display confirmation message
        formMessage.textContent =
            "Thank you, " + name + "! Your message has been recorded in this demo.";

        formMessage.style.color = "green";

        // Clear the form
        contactForm.reset();

    }

});
