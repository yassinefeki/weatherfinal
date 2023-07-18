import axios from "axios";
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

var todayString = today.toISOString().split('T')[0];
var tomorrowString = tomorrow.toISOString().split('T')[0];


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



