function calculateLove() {
    var yourName = document.getElementById('yourName').value.trim();
    var partnerName = document.getElementById('partnerName').value.trim();

    if (yourName === '' || partnerName === '') {
        alert('Please enter both names.');
        return;
    }

    var lovePercentage = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
    var resultMessage = yourName + ' and ' + partnerName + '\'s love percentage is ' + lovePercentage + '%.';
    
    displayResult(resultMessage);
}

function displayResult(message) {
    var resultContainer = document.getElementById('result');
    resultContainer.textContent = message;
}
