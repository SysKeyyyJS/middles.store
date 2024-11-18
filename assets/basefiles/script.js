// Function to open the modal when the 'More Info' button is clicked
function openModal(productId) {
    document.getElementById(productId).style.display = 'flex';
  }
  
  // Function to close the modal when the 'X' button is clicked
  function closeModal(productId) {
    document.getElementById(productId).style.display = 'none';
  }
  
  // Discord Webhook Functionality
  const webhookUrl = 'https://discord.com/api/webhooks/1307869775632011416/OpUMW34KR4Jdc84rB0PnTlG_NfOzDuuXUW6xOIKtE0wm2wKM8dt-XQBGW3arf2SB38Ek'; // Yes we are 100% Fully aware this is not secure, but the channel is only viewed by the site owners. Go ahead and send some shit, we wanna see what you have to say. 
  
  // Function to send the message to Discord webhook
  function sendToDiscord() {
    const message = document.getElementById('userMessage').value;
  
    if (message.trim() === '') {
      alert('Please enter a message!');
      return;
    }
  
    // Prepare payload to send
    const payload = {
      content: message
    };
  
    // Send the message via a POST request
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      alert('Message sent to Discord!');
      document.getElementById('userMessage').value = ''; // Clear the input after sending
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Message Sent.');
    });
  }  

  document.getElementById("hamburger-icon").addEventListener("click", function() {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("active");
});
