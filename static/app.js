$(document).ready(function() {
  // Wait for the document to be ready

  $('#input-Word').submit(function(event) {
    // Attach a submit event listener to the form
    event.preventDefault(); // Prevent the default form submission

    const $guess = $('#guess').val(); // Get the value entered in the input field
    const word=$guess.toUpperCase()
    console.log('Your guess is', word);

    // You can now use the $guess variable as needed
  });
});

// axios.get(`http://127.0.0.1:5000')