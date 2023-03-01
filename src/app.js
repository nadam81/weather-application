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
let month = months[now.getMonth()];
let hour = now.getHours();
let minute = now.getMinutes();
let apiKey = "2a2eaa51d996796495bf456e5b58adf4";
let fullHour = hour + ":" + minute;
let tempNumber = document.querySelector(".tempNumber");
let todayDay = document.querySelector("#today-day");
let cityInput = document.querySelector("#city-input");
let cityResult = document.querySelector(".cityResult");
let btnCurrent = document.querySelector("#btn-current");
let degreeF = document.querySelector("#degreeF");
let degreeC = document.querySelector("#degreeC");
let cityForm = document.querySelector("#city-search");
let paris = document.querySelector("#paris");
let london = document.querySelector("#london");
let madrid = document.querySelector("#madrid");
let wind = document.querySelector("#wind-value");
let humidity = document.querySelector("#humidity-value");

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
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}
paris.addEventListener("click", showParis);

// Pour les résultats de London
function showLondon(event) {
  let city = "London";
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}
london.addEventListener("click", showLondon);

// Pour les résultats de Madrid
function showMadrid() {
  let city = "Madrid";
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}
madrid.addEventListener("click", showMadrid);

// Pour les résultats de search
function showSearch(event) {
  event.preventDefault();
  let city = cityInput.value;
  city = city.trim();
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeather);
  axios.get(cityUrl).then(showCityName);
}
cityForm.addEventListener("submit", showSearch);

// bouton Current ou landing page
function currentPosition(response) {
  let currentLongitude = response.coords.longitude;
  let currentLatitude = response.coords.latitude;
  let currentUrlTemp = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;
  axios.get(currentUrlTemp).then(showWeather);
  let currentCityNameUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}`;
  axios.get(currentCityNameUrl).then(showCurrentCityName);
}

// Show the current Temp both in Cº and Fº
function showWeather(response) {
  let cityCurrentTemp = Math.round(response.data.main.temp);
  tempNumber.innerHTML = cityCurrentTemp;
  let tempNumberF = (cityCurrentTemp * 9) / 5 + 32;
  wind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  humidity.innerHTML = `${Math.round(response.data.main.humidity)} %`;

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
  cityResult.innerHTML = response.data.name;
}

// When click on Current Button
btnCurrent.addEventListener("click", getPosition);
