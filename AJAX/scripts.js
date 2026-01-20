function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " 🤔 " + data.punchline;
    });
}




function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("dog").src = data.message;
    });
}




