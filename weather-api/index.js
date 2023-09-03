const key = "c81c26fe649c40acab4124959230109";

const setForcast = (forecast) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let forecastHtml = ``;
  forecast.forEach((weather) => {
    const { day, astro } = weather;
    const timestamp = weather.date_epoch * 1000;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", options);
    forecastHtml += `<div class="card">
    <h3>${formattedDate}</h3>
    <div class="flex-row j-between a-center card-item">
        <div class="for-col for-condtions">
          <img src="${day.condition.icon}" alt="icon">
          <p>${day.condition.text}</p>
        </div>
        <div class="for-col for-temp">
          <p>Max temp: ${day.maxtemp_c}℃</p>
          <p>Min temp: ${day.mintemp_c}℃</p>
          <p>Abg temp: ${day.avgtemp_c}℃</p>
        </div>
        <div class="for-col for-wind">
          <p>Average Humidity: ${day.avghumidity}%</p>
          <p>Max Wind Speed: ${day.maxwind_kph}km/h</p>
        </div>
        <div class="for-col astro_day">
          <p>Sunrise: ${astro.sunrise}</p>
          <p>Sunset: ${astro.sunset}</p>
        </div>
        <div class = "for-col astro_night">
          <p>Moon Phase: ${astro.moon_phase}</p>
          <p>Moonrise: ${astro.moonrise}</p>
          <p>Moonset: ${astro.moonset}</p>
        </div>
    </div>
  </div>`;
  });
  return forecastHtml;
};

const fetchWeather = async (setloc = "new delhi") => {
  loader.style.display="block"
  container.style.display = "none";
  w_forecast.style.display = "none";
  try {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${setloc}&days=7`
    ).then((response) => {
      return response.json();
    });
    if(data){
      loader.style.display = "none";
      container.style.display = "block"
      w_forecast.style.display = "block";
      const { location, current } = data;
      const { condition } = current;
      l_name.innerHTML = location.name;
      region.innerHTML = location.region + ",";
      country.innerHTML = location.country;
      w_text.innerHTML = condition.text;
      icon.src = condition.icon;
      temp_c.innerHTML = current.temp_c;
      wind_kph.innerHTML = current.wind_kph;
      wind_degree.innerHTML = current.wind_degree;
      wind_dir.innerHTML = current.wind_dir;
      humidity.innerHTML = current.humidity;
      cloud.innerHTML = current.cloud;
      feelslike_c.innerHTML = current.feelslike_c;
      const forecastHtml = await setForcast(data.forecast.forecastday);
      w_forecast.innerHTML = forecastHtml;
    }
  } catch (error) {
    console.log("404 NOT Found")
  }
};

btn_search.addEventListener("click", (e) => {
  e.preventDefault();
  if(!city.value){
    alert("Please enter your any location.")
    return null;
  }
  fetchWeather(city.value);
});

fetchWeather();
