import axios from "axios";

var today = new Date();
var nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7); // Add 7 days to get the next week

var todayString = today.toISOString().split('T')[0];
var nextWeekString = nextWeek.toISOString().split('T')[0];





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