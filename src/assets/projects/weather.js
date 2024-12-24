const btn = document.querySelector(".submit");
const inpValue = document.querySelector(".inputValue");
const nameCity = document.querySelector(".cityName");
const weather = document.querySelector('.weather');
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector('.feels-like');
const minTemp = document.querySelector('.min-temp');
const maxTemp = document.querySelector('.max-temp');
const pressure = document.querySelector('.pressure');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector(".wind");
const cloudiness = document.querySelector('.cloudiness');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const weatherClouds = document.querySelector(".weather_main_clouds");
const weatherDesc = document.querySelector(".weather_description");
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const error = document.querySelector('.error');
const errorField = document.querySelector('.errorFieldEmpty');

const fetchWeather = function(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ef03a361b462e23bdd581f12b5e2b2d`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      const nameValue = data.name;
      const iconSrc = data.weather[0].icon;
      const weatherMain = data.weather[0].main;
      const tempValue = data.main.temp;
      const feelsLikeValue = data.main.feels_like;
      const minTempValue = data.main.temp_min;
      const maxTempValue = data.main.temp_max;
      const pressureValue = data.main.pressure;
      const humidityValue = data.main.humidity;
      const windValue = data.wind.speed;
      const cloudsValue = data.weather[0].description;

      document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${iconSrc}@2x.png`;
      temperature.innerText = Math.trunc(tempValue - 273.15) + "°C";
      feelsLike.innerText = Math.trunc(feelsLikeValue - 273.15) + "°C";
      minTemp.innerText = Math.trunc(minTempValue - 273.15) + "°C";
      maxTemp.innerText = Math.trunc(maxTempValue - 273.15) + "°C";
      nameCity.innerHTML = nameValue;
      weather.innerHTML = weatherMain;
      pressure.innerText = `${pressureValue} hPa`;
      humidity.innerText = `${humidityValue}%`;
      wind.innerHTML = `${windValue} m/s`;
      cloudiness.innerHTML = `${cloudsValue}`;
      weatherClouds.innerHTML = cloudsValue;
    })
    .catch(() => {
      error.classList.add('active');
      setTimeout(()=>{
        error.classList.remove('active')
      },3000)
    } );
}



const currentDate = new Date();
const options = { weekday: 'short', day: 'numeric', month: 'short' };
const formattedDate = new Intl.DateTimeFormat('en-GB',options).format(currentDate)
const formattedTime = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
date.textContent = formattedDate;
time.textContent = formattedTime;


fetchWeather('Skopje');


btn.addEventListener("click", function () {
  const city = inpValue.value.trim();
  if (city) {
    fetchWeather(city);
    inpValue.value = ''; 
  } else {
   console.log(errorField.textContent);
   errorField.classList.add('active');
    setTimeout(()=>{
      errorField.classList.remove('active')
    },3000)
  }
});
