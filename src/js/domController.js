import { getForecast } from "./getData";

function elementBuilder(element, classList, textContent, dataName) {  //element builder copied and modified from previous project.
  const xelement = document.createElement(element);
  if (classList != '') {
    if (typeof classList == 'object') {
      classList.forEach(classLabel => {
        xelement.classList.add(classLabel);
      });
    } else xelement.classList.add(classList);
  }
  if (textContent != '') {
    xelement.value = textContent;
    xelement.textContent = textContent;
  }
  if (dataName != '') xelement.dataset.element = dataName;
  return xelement;
}

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

function tabContentBuilder(forecast) {
  let hourContainers = [];
  for(let i = 0; forecast.hour.length > i; i++) {
    const hourContainer = elementBuilder('div', 'hourContainer', '', '');
    const hourLabel = elementBuilder('h3', '', '', '');
      (i < 10) ?
        hourLabel.textContent = `0${i}h`:
        hourLabel.textContent = `${i}h`;
    const hourTemp = elementBuilder('h4', '', `${forecast.hour[i].temp_c}°C`, '');
    const hourRainChance = elementBuilder('h5', '', `${forecast.hour[i].chance_of_rain}`, '');
    const hourWindSpeed = elementBuilder('h5', '', `${forecast.hour[i].wind_kph}km/h`, '');
    const hourIcon = elementBuilder('img', 'hourIcon', '', '');
      hourIcon.src = forecast.hour[i].condition.icon;
    hourContainer.append(hourLabel, hourTemp, hourRainChance, hourWindSpeed, hourIcon);
    hourContainers.push(hourContainer);
  }
  return hourContainers;
}
function tabSwitcher(tabNumber, forecast) {
  const tabContentContainer = document.querySelector('.futureWeatherContent');
  const tabContent = tabContentBuilder(forecast.forecast.forecastday[tabNumber]);
  tabContentContainer.append(...tabContent);
}

export async function init() {
  const forecast = await getForecast('nottingham');
  currentWeatherUpdater(forecast);
  tabSwitcher(0, forecast);
}