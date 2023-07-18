import { getWeather2 } from "./weather2.js";
import { checkWeather } from "./weather1.js";

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

        console.log(data);

        // Additional code for using the weather data

      } catch (error) {
        console.error("An error occurred while retrieving weather information:", error);
      }
    }
  });
});

