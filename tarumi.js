// Function to display a surprise message
function displayMessage() {
    const messageElement = document.getElementById("surpriseMessage");
    messageElement.textContent = "🎉 Surprise! Happy Birthday Tarumi! 🎉";
    messageElement.style.color = "blue";
}

// Function to handle form submission
function submitForm() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
        document.getElementById("formResponse").textContent = `Thank you, ${name}, for your birthday message!`;
        clearForm();
    } else {
        document.getElementById("formResponse").textContent = "Please fill out both fields.";
    }
}

// Function to clear form fields after submission
function clearForm() {
    document.getElementById("name").value = '';
    document.getElementById("message").value = '';
}
