function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
        alert('Invalid email format!');
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert('Invalid phone number format! Please enter a 10-digit phone number.');
        return false;
    }

    return true;
}
