function changeText() {
  document.getElementById("title").innerText = "You clicked me! 🎉";
}


function changeText() {
  const title = document.getElementById("title");
  title.innerText = "Awesome!";
  title.style.color = "purple";
}



function addEmoji() {
  const box = document.getElementById("box");
  box.innerHTML += "😄 ";
}



function sayHello() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("message").innerText = "Hello " + name + " 👋";
}



// AJAX

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " 🤔 " + data.punchline;
    });
}


function getJoke() {
  const joke = document.getElementById("joke");
  joke.innerText = "Loading... ⏳";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      joke.innerText = data.setup + " 😂 " + data.punchline;
    });
}







// ----------------------------------------------------------------------

