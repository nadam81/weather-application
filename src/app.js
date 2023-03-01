let now = new Date();
let days = ["sun.", "mon.", "tue.", "wed.", "thu.", "fri.", "sat."];
let day = days[now.getDay()];
let date = now.getDate();
let months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec.",
];
let apiKey = "aed005a0bfto11950d353cd8148e9ec7";
let btnCurrent = document.querySelector("#btn-current");
let cityForm = document.querySelector("#city-search");
let cityInput = document.querySelector("#city-input");
let cityResult = document.querySelector(".cityResult");
let degreeC = document.querySelector("#degreeC");
let degreeF = document.querySelector("#degreeF");
let hour = now.getHours();
let humidity = document.querySelector("#humidity-value");
let london = document.querySelector("#london");
let madrid = document.querySelector("#madrid");
let minute = now.getMinutes();
let fullHour = hour + ":" + minute;
let month = months[now.getMonth()];
let paris = document.querySelector("#paris");
let tempNumber = document.querySelector(".tempNumber");
let todayDay = document.querySelector("#today-day");
let weatherDescription = document.querySelector("#weather-description");
let wind = document.querySelector("#wind-value");
let weatherIconToday = document.querySelector("#weather-icon-today");

// Mise en forme date
function todayDate(day, date, month) {
  todayDay.innerHTML = day + " " + date + " " + month;
}
todayDate(day, date, month);

// Mise en forme hour
function todayHours(fullHour) {
  let todayHour = document.querySelector("#today-hour");
  if (minute >= 10) {
    todayHour.innerHTML = fullHour;
  } else {
    todayHour.innerHTML = hour + ":0" + minute;
  }
}
todayHours(fullHour);

// Allows the page do download with current position information
function getPosition() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}
getPosition();

// Pour les résultats de Paris
function showParis() {
  let city = "Paris";
  let cityUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}

// Pour les résultats de London
function showLondon(event) {
  let city = "London";
  let cityUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}

// Pour les résultats de Madrid
function showMadrid() {
  let city = "Madrid";
  let cityUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}

// Pour les résultats de search
function showSearch(event) {
  event.preventDefault();
  let city = cityInput.value;
  city = city.trim();
  let cityUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}

// bouton Current ou landing page
function currentPosition(response) {
  let lon = response.coords.longitude;
  let lat = response.coords.latitude;
  let currentUrlTemp = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(currentUrlTemp).then(showWeather);
  axios.get(currentUrlTemp).then(showCityName);
}

// Show the current Temp both in Cº and Fº
function showWeather(response) {
  console.log(response);
  console.log(response.data.condition.icon_url);
  let cityCurrentTemp = Math.round(response.data.temperature.current);
  tempNumber.innerHTML = cityCurrentTemp;
  let tempNumberF = (cityCurrentTemp * 9) / 5 + 32;
  wind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  humidity.innerHTML = `${Math.round(response.data.temperature.humidity)} %`;
  weatherDescription.innerHTML = response.data.condition.description;
  weatherIconToday.src = response.data.condition.icon_url;

  // degree in Fº
  function showDegreeF(event) {
    tempNumber.innerHTML = Math.round(tempNumberF);
    event.preventDefault();
    degreeF.setAttribute("style", "color:black");
    degreeC.setAttribute("style", "color:gray");
  }
  degreeF.addEventListener("click", showDegreeF);

  // degree back in Cº
  function showDegreeC(event) {
    tempNumber.innerHTML = cityCurrentTemp;
    event.preventDefault();
    degreeC.setAttribute("style", "color:black");
    degreeF.setAttribute("style", "color:gray");
  }
  degreeC.addEventListener("click", showDegreeC);
}

// cityName for landing and current button
function showCurrentCityName(response) {
  cityResult.innerHTML = response.data[0].name;
}

// CityName for Search and listed countries
function showCityName(response) {
  cityResult.innerHTML = response.data.city;
}

// When click on Paris
paris.addEventListener("click", showParis);

// When click on London
london.addEventListener("click", showLondon);

// When click on Madrid
madrid.addEventListener("click", showMadrid);

// When click on Current Button
btnCurrent.addEventListener("click", getPosition);

// When click on Search
cityForm.addEventListener("submit", showSearch);
