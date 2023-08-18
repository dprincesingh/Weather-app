// const key = "b915083443a39e34e0359bbe44384c15";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=noida&appid=b915083443a39e34e0359bbe44384c15`;

const inputbox = document.querySelector("#input");
const searchbtn = document.getElementById("search");
const weatherimg = document.getElementById("wetaher_img");
const temperature = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windspeed = document.getElementById("windspeed");
const locationnotfound = document.getElementById("locationnotfound");
const weatherbody = document.getElementById("weatherbody");
searchbtn.addEventListener("click", () => {
  checkWeather(inputbox.value);
});



async function checkWeather(cityname) {
  const key = "b915083443a39e34e0359bbe44384c15";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;
  const weatherData = await fetch(url).then((result) => result.json());
  
  if(weatherData.cod ==='404'){
    locationnotfound.style.display = 'flex'
    weatherbody.style.display = 'none'
    
  }else{
    locationnotfound.style.display = 'none'
    weatherbody.style.display = 'flex'
    
  }
  

  console.log(weatherData);
  temperature.innerHTML = `${Math.floor( weatherData.main.temp - 273.15 )}<sup>°C</sup>`;
  description.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  windspeed.innerHTML = `${(weatherData.wind.speed * 3.6).toFixed(1)}km/h`;

  switch (weatherData.weather[0].main) {
    case "Clouds":
      weatherimg.src = "/images/cloud.png";
      break;
    case "Rain":
      weatherimg.src = "/images/rain.png";
      break;
    case "clear":
      weatherimg.src = "/images/clear.png";
      break;
    case "mist":
      weatherimg.src = "/images/mist.png";
      break;
    case "snow":
      weatherimg.src = "/images/snow.png";
      break;
  }
}
