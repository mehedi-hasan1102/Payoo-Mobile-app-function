document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const pin = document.getElementById('account-pin').value.trim();
    const mobileNumber = document.getElementById('account-no').value.trim();

    const convertedPin = parseInt(pin, 10);

    if (!mobileNumber) {
        console.log('Please enter your mobile number');
        return;
    }

    if (isNaN(convertedPin) || pin.length !== 4) {
        console.log('Invalid PIN. Please enter a 4-digit number');
        return;
    }

    if (convertedPin === 1234) {
        window.location.href = './main.html';
    } else {
        console.log('Login failed. Incorrect PIN');
    }
});
