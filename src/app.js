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

let nowPlus1 = new Date();
nowPlus1.setDate(nowPlus1.getDate() + 1);
let day2 = days[nowPlus1.getDay()];
let date2 = nowPlus1.getDate();

let nowPlus2 = new Date();
nowPlus2.setDate(nowPlus2.getDate() + 2);
let day3 = days[nowPlus2.getDay()];
let date3 = nowPlus2.getDate();

let nowPlus3 = new Date();
nowPlus3.setDate(nowPlus3.getDate() + 3);
let day4 = days[nowPlus3.getDay()];
let date4 = nowPlus3.getDate();

let nowPlus4 = new Date();
nowPlus4.setDate(nowPlus4.getDate() + 4);
let day5 = days[nowPlus4.getDay()];
let date5 = nowPlus4.getDate();

let nowPlus5 = new Date();
nowPlus5.setDate(nowPlus5.getDate() + 5);
let day6 = days[nowPlus5.getDay()];
let date6 = nowPlus5.getDate();

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
let paris = document.querySelector("#paris");
let tempNumber = document.querySelector(".tempNumber");
let todayDay = document.querySelector("#today-day");
let weatherDescription = document.querySelector("#weather-description");
let wind = document.querySelector("#wind-value");
let weatherIconToday = document.querySelector("#weather-icon-today");
let day2input = document.querySelector(".day2");
let day3input = document.querySelector(".day3");
let day4input = document.querySelector(".day4");
let day5input = document.querySelector(".day5");
let day6input = document.querySelector(".day6");
let tempDay2Low = document.querySelector("#tempDay2-low");
let tempDay2High = document.querySelector("#tempDay2-high");
let tempDay3Low = document.querySelector("#tempDay3-low");
let tempDay3High = document.querySelector("#tempDay3-high");
let tempDay4Low = document.querySelector("#tempDay4-low");
let tempDay4High = document.querySelector("#tempDay4-high");
let tempDay5Low = document.querySelector("#tempDay5-low");
let tempDay5High = document.querySelector("#tempDay5-high");
let tempDay6Low = document.querySelector("#tempDay6-low");
let tempDay6High = document.querySelector("#tempDay6-high");
let weatherIconDay2 = document.querySelector("#weather-icon-day2");
let weatherIconDay3 = document.querySelector("#weather-icon-day3");
let weatherIconDay4 = document.querySelector("#weather-icon-day4");
let weatherIconDay5 = document.querySelector("#weather-icon-day5");
let weatherIconDay6 = document.querySelector("#weather-icon-day6");

// Mise en forme date Today
function todayDate(day, date, month) {
  todayDay.innerHTML = day + " " + date + " " + month;
}
todayDate(day, date, month);

// // Mise en forme date day2
function dateDay2(day, date) {
  day2input.innerHTML = day + " " + date;
}
dateDay2(day2, date2);

// // Mise en forme date day3
function dateDay3(day, date) {
  day3input.innerHTML = day + " " + date;
}
dateDay3(day3, date3);

// // Mise en forme date day4
function dateDay4(day, date) {
  day4input.innerHTML = day + " " + date;
}
dateDay4(day4, date4);

// // Mise en forme date day5
function dateDay5(day, date) {
  day5input.innerHTML = day + " " + date;
}
dateDay5(day5, date5);

// // Mise en forme date day6
function dateDay6(day, date) {
  day6input.innerHTML = day + " " + date;
}
dateDay6(day6, date6);

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
  let cityForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeatherNow);
  axios.get(cityUrl).then(showCityName);
  axios.get(cityForecastUrl).then(showForecastTemperatures);
}

// Pour les résultats de London
function showLondon(event) {
  let city = "London";
  let cityUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let cityForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeatherNow);
  axios.get(cityUrl).then(showCityName);
  axios.get(cityForecastUrl).then(showForecastTemperatures);
}

// Pour les résultats de Madrid
function showMadrid() {
  let city = "Madrid";
  let cityUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let cityForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeatherNow);
  axios.get(cityUrl).then(showCityName);
  axios.get(cityForecastUrl).then(showForecastTemperatures);
}

// Pour les résultats de search
function showSearch(event) {
  event.preventDefault();
  let city = cityInput.value;
  city = city.trim();
  let cityUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let cityForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(cityUrl).then(showWeatherNow);
  axios.get(cityUrl).then(showCityName);
  axios.get(cityForecastUrl).then(showForecastTemperatures);
}

// bouton Current ou landing page
function currentPosition(response) {
  let lon = response.coords.longitude;
  let lat = response.coords.latitude;
  let currentUrlTemp = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  let currentForecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(currentUrlTemp).then(showWeatherNow);
  axios.get(currentUrlTemp).then(showCityName);
  axios.get(currentForecastUrl).then(showForecastTemperatures);
}

// Show the current Temp both in Cº and Fº
function showWeatherNow(response) {
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

function showForecastTemperatures(response) {
  console.log(response);
  tempDay2Low.innerHTML = Math.round(
    response.data.daily[0].temperature.minimum
  );
  tempDay2High.innerHTML = Math.round(
    response.data.daily[0].temperature.maximum
  );
  weatherIconDay2.src = response.data.daily[0].condition.icon_url;

  tempDay3Low.innerHTML = Math.round(
    response.data.daily[1].temperature.minimum
  );
  tempDay3High.innerHTML = Math.round(
    response.data.daily[1].temperature.maximum
  );
  weatherIconDay3.src = response.data.daily[1].condition.icon_url;
  tempDay4Low.innerHTML = Math.round(
    response.data.daily[2].temperature.minimum
  );
  tempDay4High.innerHTML = Math.round(
    response.data.daily[2].temperature.maximum
  );
  weatherIconDay4.src = response.data.daily[2].condition.icon_url;

  tempDay5Low.innerHTML = Math.round(
    response.data.daily[3].temperature.minimum
  );
  tempDay5High.innerHTML = Math.round(
    response.data.daily[3].temperature.maximum
  );
  weatherIconDay5.src = response.data.daily[3].condition.icon_url;

  tempDay6Low.innerHTML = Math.round(
    response.data.daily[4].temperature.minimum
  );
  tempDay6High.innerHTML = Math.round(
    response.data.daily[4].temperature.maximum
  );
  weatherIconDay6.src = response.data.daily[4].condition.icon_url;
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
