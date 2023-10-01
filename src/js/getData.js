import { add } from "date-fns"; //no longer needed

export async function getForecast(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=486e25196a914325a9c154932231009&days=3&q=${location}`);
  const forecastWeather = await response.json();
  return forecastWeather;
}

export function getDays() { //gets the next three days of the week
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday'
  ]
  const threeDays = ['Today'];
  const today = new Date();
  for (let i = 1; i < 3; i++) {
    threeDays.push(days[today.getDay() + i]);
  }
  return threeDays;
}