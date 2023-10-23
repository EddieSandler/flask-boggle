

async function playBoggle(e) {
  e.preventDefault();

  const wordInput = document.getElementById("guess");
  const word = wordInput.value;
  console.log('Word is:', word);

   const response=await axios.post("/get_input/", { word: word })
   console.log(response.config.data)

   return response
}

const form = document.getElementById('input-Word');
form.addEventListener('submit', playBoggle);

