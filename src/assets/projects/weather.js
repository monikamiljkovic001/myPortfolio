const btn = document.querySelector(".submit");
const inpValue = document.querySelector(".inputValue");
const nameCity = document.querySelector(".nameCity");

const temperature = document.querySelector(".main_temp");
const weatherClouds = document.querySelector(".weather_main_clouds");
const weatherDesc = document.querySelector(".weather_description");
const wind = document.querySelector(".wind");

btn.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inpValue.value}&appid=0ef03a361b462e23bdd581f12b5e2b2d`
  )
    .then((response) => response.json())
    .then((data) => {
      const nameValue = data.name;
      document.cookie =
        "lastVisitedPage = " +
        btoa(nameValue) +
        ";" +
        "expires = Fri, 26 Apr 2023 12:00:00 UTC; path=/";

      const iconSrc = data.weather[0].icon;
      const weatherValue = data.weather[0].description;
      const tempValue = data.main.temp;
      const cloudsValue = data.weather[0].main;

      nameCity.innerHTML = nameValue;
      document.querySelector(
        ".icon"
      ).src = `https://openweathermap.org/img/wn/${iconSrc}@2x.png`;
      temperature.innerText = Math.trunc(tempValue - 273.15) + "°C";
      weatherDesc.innerHTML = weatherValue;
      weatherClouds.innerHTML = cloudsValue;
    })

    .catch(() => alert("err.status"));
});
