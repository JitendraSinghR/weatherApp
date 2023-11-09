const apiKey = "979b153ad834730d4c4ea1d03dbff175";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  if (response.status == 404 || response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-percent").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " Km/hr";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/clear.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/drizzle.jpg";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "assets/mist.jpg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/rain.jpg";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "assets/snow.jpg";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  searchBox.value = "";
}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
