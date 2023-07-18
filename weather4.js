import axios from "axios";

export function getWeather4(lat, lon) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&past_days=31&forecast_days=1&timezone=auto",
    {
      params: {
        latitude: lat,
        longitude: lon,
      },
    }
  );
}