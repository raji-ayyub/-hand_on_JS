function getWeather() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=xxxxx")
    .then(response => response.json())
    .then(data => {
      document.getElementById("weather").innerText =
        "Temperature: " + data.main.temp + "°C";
    });
}