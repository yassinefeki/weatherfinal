const apiKey = "eba09a1b0fbf525e99e3534d1a833edd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=sfax&units=metric";

export async function checkWeather5() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  console.log(data.coord);
  return {
    lon: data.coord.lon,
    lat: data.coord.lat,
  };
}