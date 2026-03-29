const jokeStatus = document.querySelector("#jokeStatus");
const jokeOutput = document.querySelector("#jokeOutput");
const dogStatus = document.querySelector("#dogStatus");
const dogImage = document.querySelector("#dogImage");

const fallbackJokes = [
  {
    setup: "Why did the frontend developer go outside?",
    punchline: "To get some fresh cache."
  },
  {
    setup: "Why was the JavaScript file so calm?",
    punchline: "Because it knew how to handle async stress."
  }
];

const fallbackDogImage =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 280'><rect width='400' height='280' fill='%23fef3c7'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2392400e' font-family='Arial' font-size='24'>Dog image unavailable</text></svg>";

async function loadJoke() {
  jokeStatus.textContent = "Loading joke...";
  jokeOutput.textContent = "";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
      throw new Error("Joke request failed.");
    }

    const data = await response.json();
    jokeOutput.textContent = `${data.setup} ${data.punchline}`;
    jokeStatus.textContent = "Loaded from the API.";
  } catch (error) {
    const fallbackJoke = fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
    jokeOutput.textContent = `${fallbackJoke.setup} ${fallbackJoke.punchline}`;
    jokeStatus.textContent = "Network failed, so fallback content is showing.";
  }
}

async function loadDog() {
  dogStatus.textContent = "Loading dog image...";

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
      throw new Error("Dog request failed.");
    }

    const data = await response.json();
    dogImage.src = data.message;
    dogImage.alt = "A random dog loaded from the API";
    dogStatus.textContent = "Loaded from the API.";
  } catch (error) {
    dogImage.src = fallbackDogImage;
    dogImage.alt = "Fallback dog placeholder";
    dogStatus.textContent = "Network failed, so a fallback image is showing.";
  }
}

async function loadBoth() {
  await Promise.all([loadJoke(), loadDog()]);
}

document.querySelector("#jokeButton").addEventListener("click", loadJoke);
document.querySelector("#dogButton").addEventListener("click", loadDog);
document.querySelector("#allButton").addEventListener("click", loadBoth);

loadBoth();
