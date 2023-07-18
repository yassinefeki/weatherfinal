import { getWeather3 } from "./weather3.js";
import { checkWeather } from "./weather1.js";

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

  
  