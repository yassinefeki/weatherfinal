let isFirstLoad = true;

export async function checkWeather(city) {
  const apiKey = "36117734abcfb1cff6fc46f8ea136b90";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  if (!response.ok && !isFirstLoad) {
    alert("No weather found.");
    throw new Error("No weather found.");
  }

  if (response.ok) {
    const data = await response.json();
    displayWeather(data);
    var dt = new Date();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
    var day = dt.toLocaleString('en-US', { weekday: 'long' });
    var date = dt.toLocaleDateString('en-US', {  month: 'long', day: 'numeric' });
  document.getElementById('day').innerHTML = day;
  document.getElementById('date').innerHTML = date;
  document.getElementById('date-time').innerHTML = time;
    console.log(data);
    console.log(data.coord);
    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
    };
  }

  isFirstLoad = false;
}


function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  const{visibility}=data;
  const{pressure}=data.main;
  const{sunrise,sunset,country}=data.sys;
  document.querySelector(".city").innerText = "Weather in " + name;
  // document.querySelector(".icon").src =
  //   "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = Math.round(temp);
  document.querySelector(".humidity").innerText = humidity;
  document.querySelector(".sunrise").innerText = window.moment(sunrise * 1000).format('HH:mm a');
  document.querySelector(".sunset").innerText = window.moment(sunset*1000).format('HH:mm a');
  document.querySelector(".wind").innerText = speed;
  document.querySelector(".pressure").innerText = pressure;
  document.querySelector(".country").innerText = country;
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

document.querySelector(".search button").addEventListener("click", function () {
  const city = document.querySelector(".search-bar").value;
  checkWeather(city);
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const city = document.querySelector(".search-bar").value;
    checkWeather(city);
  }
});


