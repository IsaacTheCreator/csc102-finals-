// JavaScript for User Information Form

// Event listener for form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user inputs
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let zipCode = document.getElementById("zipCode").value.trim();

    // Combine first name and last name
    let fullName = firstName + " " + lastName;

    // Check if full name is too long
    if (fullName.length > 20) {
        document.getElementById("errorMessage").textContent = "Full name must be 20 characters or less.";
        return; // Exit function if invalid
    }

    // Check if zip code is valid (5 digits)
    if (!isValidZipCode(zipCode)) {
        document.getElementById("errorMessage").textContent = "Invalid zip code. Please enter 5 digits.";
        return; // Exit function if invalid
    }

    // If inputs are valid, display secret message
    document.getElementById("secretMessage").style.display = "block";
});

/**
 * Function to validate zip code format.
 * @param {string} zipCode - The zip code to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function isValidZipCode(zipCode) {
    return /^\d{5}$/.test(zipCode);
}

// Animated button on hover
document.getElementById("submitButton").addEventListener("mouseenter", function() {
    this.classList.add("animated");
});

document.getElementById("submitButton").addEventListener("mouseleave", function() {
    this.classList.remove("animated");
});
