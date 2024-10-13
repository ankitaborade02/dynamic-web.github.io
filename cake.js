document.addEventListener('DOMContentLoaded', () => {
    const nameField = document.getElementById('usr');
    const emailField = document.getElementById('eml');
    const phoneField = document.getElementById('phn');
    const messageField = document.getElementById('comment');
    const submitButton = document.querySelector('#messagebtn button');

    // Function to validate email using regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Function to validate phone number (10 digits)
    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }

    // Function to validate name (must not be empty)
    function validateName(name) {
        return name.trim() !== '';
    }

    // Function to validate message (must not be empty)
    function validateMessage(message) {
        return message.trim() !== '';
    }

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Reset previous error messages
        nameField.classList.remove('is-invalid');
        emailField.classList.remove('is-invalid');
        phoneField.classList.remove('is-invalid');
        messageField.classList.remove('is-invalid');

        // Validate each field
        let isValid = true;

        if (!validateName(nameField.value)) {
            nameField.classList.add('is-invalid');
            isValid = false;
        }
        if (!validateEmail(emailField.value)) {
            emailField.classList.add('is-invalid');
            isValid = false;
        }
        if (!validatePhone(phoneField.value)) {
            phoneField.classList.add('is-invalid');
            isValid = false;
        }
        if (!validateMessage(messageField.value)) {
            messageField.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            // Optionally: Perform form submission logic here
        } else {
            alert("Please correct the errors in the form.");
        }
    });
});
function toggleReadMore() {
    const extraText = document.getElementById('extraText');
    const readMoreBtn = document.getElementById('readMoreBtn');

    if (extraText.style.display === 'none') {
        // Show the extra text
        extraText.style.display = 'inline';
        readMoreBtn.textContent = 'Read Less'; // Change button text
    } else {
        // Hide the extra text
        extraText.style.display = 'none';
        readMoreBtn.textContent = 'Read More...'; // Revert button text
    }
}



// placeorder validation form 


document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    // Fetch input values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phn').value.trim();
    const address = document.getElementById('add').value.trim();
    const orderDate = document.getElementById('order').value;

    // Check if name is empty
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Check if phone number is valid (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Check if address is empty
    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    // Check if order date is selected
    if (!orderDate) {
        alert("Please select an order date.");
        return;
    }

    // If all checks pass, submit the form 
    alert("Order placed successfully!");
    
});



// to give validation for customer name 

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting automatically

    const nameInput = document.getElementById("name").value.trim();
    const nameLength = nameInput.length;

    if (nameLength < 1 || nameLength > 8) {
        alert("Customer name must be between 1 and 8 characters.");
        return false;  // Prevent form submission if validation fails
    }

    
    alert("Proceeding to payment");
    
});



document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const customerName = document.getElementById('name').value;
    const orderDate = document.getElementById('order').value;
    const address = document.getElementById('add').value;

    // Store values in localstorage
    localStorage.setItem('customerName', customerName);
    localStorage.setItem('orderDate', orderDate);
    localStorage.setItem('address', address);

    // Redirect to payment page
    window.location.href = 'payment.html';
});








