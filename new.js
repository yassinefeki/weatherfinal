let isFirstLoad = true;
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


export async function checkWeather(city) {
  const apiKey = "eba09a1b0fbf525e99e3534d1a833edd";
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

var today = new Date();
var tomorrow = new Date();
var nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7); // Add 7 days to get the next week

tomorrow.setDate(today.getDate() + 1);

var todayString = today.toISOString().split('T')[0];
var tomorrowString = tomorrow.toISOString().split('T')[0];
var nextWeekString = nextWeek.toISOString().split('T')[0];


export function getWeather2(lat, lon) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,rain,visibility",
    {
      params: {
        latitude: lat,
        longitude: lon,
        start_date: todayString,
        end_date: tomorrowString,

        
        
      },
    }
  );
}
document.addEventListener('DOMContentLoaded', function() {
  var dt = new Date();
  var hours = dt.getHours();

  function getNextHour(hours) {
    if (hours == 23) {
      return 0;
    } else {
      return hours + 1;
    }
  }
  
  var nexthour = getNextHour(hours);
  document.getElementById('next-hour1').innerHTML = nexthour + ":00";
  var nexthour2 = getNextHour(nexthour);
  document.getElementById('next-hour2').innerHTML = nexthour2 + ":00";
  var nexthour3 = getNextHour(nexthour2);
  document.getElementById('next-hour3').innerHTML = nexthour3 + ":00";
  var nexthour4 = getNextHour(nexthour3);
  document.getElementById('next-hour4').innerHTML = nexthour4 + ":00";
  var nexthour5 = getNextHour(nexthour4);
  document.getElementById('next-hour5').innerHTML = nexthour5 + ":00";
  var nexthour6 = getNextHour(nexthour5);
  document.getElementById('next-hour6').innerHTML = nexthour6 + ":00";
  var nexthour7 = getNextHour(nexthour6);
  document.getElementById('next-hour7').innerHTML = nexthour7 + ":00";
  
  document.getElementById('city-input').addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
      try {
        const city = event.target.value;
        const coord = await checkWeather(city);
        const x = coord.lon;
        const y = coord.lat;

        const response = await getWeather2(y, x);
        const data = response.data;

        var nexthourtemp1 = Math.round(data.hourly.temperature_2m[hours]);
        document.getElementById('next-hourtemp1').innerHTML = nexthourtemp1 + "°c";

        var nexthourtemp2 = Math.round(data.hourly.temperature_2m[hours + 1]);
        document.getElementById('next-hourtemp2').innerHTML = nexthourtemp2 + "°c";

        var nexthourtemp3 = Math.round(data.hourly.temperature_2m[hours + 2]);
        document.getElementById('next-hourtemp3').innerHTML = nexthourtemp3 + "°c";

  

        var nexthourtemp4 = Math.round(data.hourly.temperature_2m[hours + 3]);
        document.getElementById('next-hourtemp4').innerHTML = nexthourtemp4 + "°c";
        var nexthourtemp5 = Math.round(data.hourly.temperature_2m[hours + 4]);
        document.getElementById('next-hourtemp5').innerHTML = nexthourtemp5 + "°c";
        var nexthourtemp6 = Math.round(data.hourly.temperature_2m[hours + 5]);
        document.getElementById('next-hourtemp6').innerHTML = nexthourtemp6 + "°c";
        var nexthourtemp7 = Math.round(data.hourly.temperature_2m[hours + 6]);
        document.getElementById('next-hourtemp7').innerHTML = nexthourtemp7 + "°c";

        console.log(data);

        // Additional code for using the weather data

      } catch (error) {
        console.error("An error occurred while retrieving weather information:", error);
      }
    }
  });
});

export function getWeather3(lat, lon) {
    return axios.get(
      "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&daily=weathercode,temperature_2m_max&timezone=auto",
      {
        params: {
          latitude: lat,
          longitude: lon,
          start_date: todayString,
          end_date: nextWeekString,
        },
      }
    );
  }


/*export async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    console.log(data.coord);
    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
    };
  }*/
export function getWeather4(lat, lon) {
    return axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,windspeed_10m&current_weather=true&past_days=31&forecast_days=1&timezone=auto",
      {
        params: {
          latitude: lat,
          longitude: lon,
        },
      }
    );
  }

/*
  async function fetchData() {
    console.log("ab");
    const coord = await checkWeather();
    const x = coord.lon;
    const y = coord.lat;
    
    getWeather2(y, x).then((res) => {
      console.log(res.data);
    });
    
  }*/
  /*
  async function fetchData2() {
    const coord = await checkWeather();
    const x = coord.lon;
    const y = coord.lat;
  getWeather4(y, x).then((res) => {
    console.log(res.data);
  });
  }*/
  //fetchData2();
  //fetchData();

  async function main() {
  
    document.getElementById('city-input').addEventListener('keydown', async function(event) {
      if (event.key === 'Enter') {
        try {
          const city = event.target.value;
      const coord = await checkWeather(city);
      const x = coord.lon;
      const y = coord.lat;
  
      // Rest of your code that depends on the weather data
  
  getWeather3(y, x)
    .then(response => {
      var today = new Date();
      var dateToday = today.toISOString().split('T')[0];
  
  
      const data = response.data;
      console.log(data);
      var temptomorrow1=Math.round(data.daily.temperature_2m_max[1]);
      document.getElementById('temptommorow1').innerHTML = temptomorrow1+"°c";
      var temptomorrow2=Math.round(data.daily.temperature_2m_max[2]);
      document.getElementById('temptommorow2').innerHTML = temptomorrow2+"°c";
      var temptomorrow3=Math.round(data.daily.temperature_2m_max[3]);
      document.getElementById('temptommorow3').innerHTML = temptomorrow3+"°c";
      var temptomorrow4=Math.round(data.daily.temperature_2m_max[4]);
      document.getElementById('temptommorow4').innerHTML = temptomorrow4+"°c";
      var temptomorrow5=Math.round(data.daily.temperature_2m_max[5]);
      document.getElementById('temptommorow5').innerHTML = temptomorrow5+"°c";
      var temptomorrow6=Math.round(data.daily.temperature_2m_max[6]);
      document.getElementById('temptommorow6').innerHTML = temptomorrow6+"°c";
      var temptomorrow7=Math.round(data.daily.temperature_2m_max[7]);
      document.getElementById('temptommorow7').innerHTML = temptomorrow7+"°c";
  
      
       // Afficher les données dans la console ou effectuer toute autre opération souhaitée avec les données
  
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors de la récupération des informations météorologiques :', error);
    });
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    
    const dayNames = [];
    for (let i = 0; i < 8; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      const dayName = daysOfWeek[date.getDay()];
      dayNames.push(dayName);
    }
    var dayname= dayNames[1];
    document.getElementById('dayname').innerHTML = dayname;
    var dayname1= dayNames[2];
    document.getElementById('dayname1').innerHTML = dayname1;
    var dayname2= dayNames[3];
    document.getElementById('dayname2').innerHTML = dayname2;
    var dayname3= dayNames[4];
    document.getElementById('dayname3').innerHTML = dayname3;
    var dayname4= dayNames[5];
    document.getElementById('dayname4').innerHTML = dayname4;
    var dayname5= dayNames[6];
    document.getElementById('dayname5').innerHTML = dayname5;
    var dayname6= dayNames[7];
    document.getElementById('dayname6').innerHTML = dayname6;
  
  } catch (error) {
    console.error("An error occurred while retrieving weather information:", error);
  }
  }
  });
  };
main();
/*const apiKey1 = "eba09a1b0fbf525e99e3534d1a833edd";
const apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=sfax&units=metric";

export async function checkWeather5() {
  const response = await fetch(apiUrl1 + `&appid=${apiKey1}`);
  const data = await response.json();
  console.log(data);
  console.log(data.coord);
  return {
    lon: data.coord.lon,
    lat: data.coord.lat,
  };
}*/
async function main3() {
  const inputElement = document.getElementById('city-input');
  inputElement.addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
      try {
        const city = event.target.value;
        const coord = await checkWeather(city);
        const x = coord.lon;
        const y = coord.lat;

        const res = await getWeather4(y, x);
        console.log("res.data");
        console.log(res.data);

        // Perform any necessary operations with the data
        // ...

        sendJSONToPHP(res.data);
      } catch (error) {
        console.error(error);
      }
    }
  });
}

function sendJSONToPHP(file) {
  // Convert the variable file to a JSON string
  const jsonString = JSON.stringify(file);

  // Send the JSON data to the PHP file
  $.ajax({
    type: "POST",
    url: "fetch.php",
    data: { json: jsonString },
    success: function(response) {
      // Handle the response from PHP
      console.log(response);
    }
  });
}

console.log("rsvfsvfsfd");
// Call the main3 function
main3();


/*async function fetchData3() {
    const coord = await checkWeather5();
    const x = coord.lon;
    const y = coord.lat;
  getWeather4(y, x).then((res) => {
    console.log("data");

   return  res.data; 
  });


var data123=fetchData3();
console.log("data123");
console.log(data123);}*/

/*fetchData3().then((data) => {
  data123=data; // The resolved data from the promise
}).catch((error) => {
  console.error(error); // Handle any errors that occurred during the promise chain
});*/

/*




*/