const apiKey = "d2ce2371912427e9ce0c9f209ee518c9";

// const weatherCity = "Chennai";
checkWeather();
const search = document.querySelector("#search-btn");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather() {
  const weatherCity = document.querySelector("#w-city").value;
  //   alert(weatherCity);
  const response = await fetch(
    apiUrl + `&q=${weatherCity}` + `&appid=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  if (data.cod === "404") {
    alert("City not found. Please enter a valid city name.");
    return;
  } else if (data.cod === "400") {
    alert("City Not Found");
    return;
  }
  document.querySelector("#weather-city").innerHTML = data.name;
  document.querySelector("#weather-deg").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector("#weather-hum").innerHTML = data.main.humidity + "%";
  document.querySelector("#weather-wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    document.querySelector("#weather-type").src = "./images/cloudy.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector("#weather-type").src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector("#weather-type").src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector("#weather-type").src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector("#weather-type").src = "./images/mist.png";
  } else {
    document.querySelector("#weather-type").src = "./images/clear.png";
  }
}
document.addEventListener("DOMContentLoaded", checkWeather);
search.addEventListener("click", checkWeather);
