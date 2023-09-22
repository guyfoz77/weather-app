import { getForecast } from "./getData";

export function currentWeatherUpdater(forecast) {
  const currentTemp = document.querySelector('.currentTemp');
  const currentWind = document.querySelector('.currentWind');
  const currentUV = document.querySelector('.currentUV');
  const currentHumidity = document.querySelector('.currentHumidity');
  const currentConditionText = document.querySelector('.currentConditionText');
  const currentConditionImage = document.querySelector('.currentConditionImage');

  currentTemp.textContent = `${forecast.current.temp_c}°C`;
  currentWind.textContent = `${forecast.current.wind_kph} km/h`;
  currentUV.textContent = `${forecast.current.uv}`
  currentHumidity.textContent = `${forecast.current.humidity}%`;
  currentConditionText.textContent = forecast.current.condition.text;
  currentConditionImage.src = forecast.current.condition.icon;
}

export async function init() {
  const forecast = await getForecast('nottingham');
  currentWeatherUpdater(forecast);
}