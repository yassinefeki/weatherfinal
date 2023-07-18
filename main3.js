import { checkWeather5 } from "./weather5.js";
import { getWeather4 } from "./weather4.js";

async function fetchData3() {
    const coord = await checkWeather5();
    const x = coord.lon;
    const y = coord.lat;
  getWeather4(y, x).then((res) => {
    console.log(res.data);
  });
  }
fetchData3();