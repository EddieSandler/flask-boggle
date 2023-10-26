const used_words = [];
let score = 0;
let timeLeft = 60; // Initial time in seconds


// Function to update the timer
function updateTimer() {

  if (timeLeft > 0) {
    document.getElementById('timer').textContent = timeLeft;

    timeLeft--;
  } else {

    document.getElementById('timer').textContent = '0';


    saveScore(score)
    clearInterval(timerInterval); // Stop the timer

    const wordInput = document.getElementById("guess");
    document.getElementById('guess').disabled = true

  }
}

// Start the timer
const timerInterval = setInterval(updateTimer, 1000); // Update every second


async function playBoggle(e) {
  e.preventDefault();


  const wordInput = document.getElementById("guess");
  const wordElement = document.getElementById("word");
  const word = wordInput.value;

  wordElement.textContent = word;


  const response = await axios.post("/get_input/", { word: word });

  const is_valid = response.data.is_valid;

  document.getElementById('message').textContent = is_valid;
  wordInput.value='';


  if(used_words.includes(word)){

    document.getElementById('message').textContent = 'Word already used';
    wordInput.value='';
  }
  if(is_valid==='ok' && !used_words.includes(word)){
    document.getElementById('message').textContent = 'Good Word!';

    used_words.push(word)
    score += word.length
    document.getElementById('score').textContent = score;


  wordInput.value = '';
  return response;
}
async function saveScore(score){
  const savedScore=await axios.post("/save_score/", { score: score });


  document.getElementById('numGames').textContent = numGames;
  return savedScore
}

}


const form = document.getElementById('input-Word');
form.addEventListener('submit', playBoggle)
