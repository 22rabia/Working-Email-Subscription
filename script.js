document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    if (validateEmail(email)) {
        submitForm(email);
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function submitForm(email) {
    const formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    const entryId = "YOUR_ENTRY_ID"; // Entry ID for the email field

    fetch(`${formUrl}?entry.${entryId}=${encodeURIComponent(email)}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => {
        document.getElementById("thank-you-message").style.display = "block";
        document.getElementById("email").value = ""; // Clear the input field
    })
    .catch(error => {
        console.error("Error submitting form:", error);
    });
}
