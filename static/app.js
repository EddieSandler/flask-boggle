const used_words = [];
let score = 0;
let timeLeft = 60; // Initial time in seconds

// Function to update the timer
function updateTimer() {
  if (timeLeft > 0) {
    // console.log(`Time left: ${timeLeft} seconds`);
    timeLeft--;
  } else {
    console.log('Time is up!');
    // You can add game-over logic here
    clearInterval(timerInterval); // Stop the timer

    const wordInput = document.getElementById("guess");
    wordInput.disabled = true; // Disable the input field
  }
}

// Start the timer
const timerInterval = setInterval(updateTimer, 1000); // Update every second


async function playBoggle(e) {
  e.preventDefault();


  const wordInput = document.getElementById("guess");
  const word = wordInput.value;
  console.log('Word is:', word);


  const response = await axios.post("/get_input/", { word: word });

  const is_valid = response.data.is_valid;
  console.log('status:', is_valid);

  if(used_words.includes(word)){
    console.log('try again asshole- you already used that')
  }
  if(is_valid==='ok' && !used_words.includes(word)){
    console.log('good word')
    used_words.push(word)
    score += word.length
    console.log(used_words)
    console.log('score',score)
  }

  wordInput.value = '';
  return response;
}

const form = document.getElementById('input-Word');
form.addEventListener('submit', playBoggle);

