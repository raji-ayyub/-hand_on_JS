function getWeather() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=3cfa28092f25df600b1a9ba3865e3c47")
    .then(response => response.json())
    .then(data => {
      document.getElementById("weather").innerText =
        "Temperature: " + data.main.temp + "°C";
    });
}