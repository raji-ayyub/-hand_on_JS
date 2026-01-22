console.log("hello world")

const jokeResult = document.getElementById("joke-result")

async function getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")

    const data = await response.json()

    jokeResult.innerText = data.setup + " 😊 " + data.punchline

}
