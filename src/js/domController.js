import { getForecast, getDays} from "./getData";

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

export function currentWeatherUpdater(day, forecast) {
  const location = document.querySelector('.location');
  const currentTemp = document.querySelector('.currentTemp');
  const currentWind = document.querySelector('.currentWind');
  const currentHumidity = document.querySelector('.currentHumidity');
  const currentConditionText = document.querySelector('.currentConditionText');
  const currentConditionImage = document.querySelector('.currentConditionImage');

  location.textContent = `${forecast.location.name}, ${forecast.location.region}`;
  currentTemp.textContent = `${forecast.current.temp_c}°C`;
  currentWind.textContent = `${Math.round(forecast.current.wind_kph)} km/h`;
  currentHumidity.textContent = `${forecast.current.humidity}%`;
  currentConditionText.textContent = forecast.current.condition.text;
  currentConditionImage.src = forecast.current.condition.icon;
}

function dayAverageContentBuilder(day, forecast) {
  const elements = [
    elementBuilder('h3', 'dayCondition', forecast.forecast.forecastday[day].day.condition.text, ''),
    // elementBuilder('img', 'dayAverageImg', '', ''),
    elementBuilder('h4', 'dayMaxTempLabel', 'Max', ''),
    elementBuilder('h4', 'dayMaxTempValue', `${Math.round(forecast.forecast.forecastday[day].day.maxtemp_c)}°C`, ''),
    elementBuilder('h4', 'dayHumidityLabel', 'Hum', ''),
    elementBuilder('h4', 'dayHumidityValue', `${forecast.forecast.forecastday[day].day.avghumidity}%`, ''),
    elementBuilder('h4', 'dayMinTempLabel', `Min`, ''),
    elementBuilder('h4', 'dayMinTempValue', `${Math.round(forecast.forecast.forecastday[day].day.mintemp_c)}°C`, ''),
    elementBuilder('h4', 'dayWindLabel', `Wind`, ''),
    elementBuilder('h4', 'dayWindValue', `${Math.round(forecast.forecast.forecastday[day].day.maxwind_kph)}km/h`, '')
  ];
  // elements[1].src = forecast.forecast.forecastday[day].day.condition.icon; //this does not feel like an ideal solution.
  return elements;
}
function hourlyContentBuilder(day, forecast) {
  let hourContainers = [];
  const date = new Date()
  const currentHour = date.getHours();
  let fromHour = 0; //determines which hour to build the hourlys from.
  if (day == 0) fromHour = currentHour + 1;
  for(fromHour; forecast.hour.length > fromHour; fromHour++) {
    const hourContainer = elementBuilder('div', 'hourContainer', '', '');
    const hourLabel = elementBuilder('h3', '', '', '');
      (fromHour < 10) ?
        hourLabel.textContent = `0${fromHour}h`:
        hourLabel.textContent = `${fromHour}h`;
    const hourTemp = elementBuilder('h4', '', `${Math.round(forecast.hour[fromHour].temp_c)}°C`, '');
    // const hourRainChance = elementBuilder('h5', '', `${forecast.hour[i].chance_of_rain}`, '');
    const hourWindSpeed = elementBuilder('h5', '', `${Math.round(forecast.hour[fromHour].wind_kph)}km/h`, '');
    const hourIcon = elementBuilder('img', 'hourIcon', '', '');
      hourIcon.src = forecast.hour[fromHour].condition.icon;
    hourContainer.append(hourLabel, hourTemp, hourWindSpeed, hourIcon);
    hourContainers.push(hourContainer);
  }
  return hourContainers;
}
function tabEventListeners(forecast) {
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      tabSwitcher(e.target.dataset.day , forecast);
    })
  });
}
function tabSwitcher(day, forecast) {
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(tab => {
    tab.classList.remove('selected');
    if (tab.dataset.day == day) tab.classList.add('selected');
  });

  currentWeatherUpdater(0, forecast);
  const dailyAverageContentContainer = document.querySelector('.futureWeatherDayContent');
  dailyAverageContentContainer.innerHTML = '';
  const dailyAverageContent = dayAverageContentBuilder(day, forecast);
  dailyAverageContentContainer.append(...dailyAverageContent);

  const hourlyContentContainer = document.querySelector('.futureWeatherHourContent');
  hourlyContentContainer.innerHTML = '';
  const hourlyContent = hourlyContentBuilder(day, forecast.forecast.forecastday[day]);
  hourlyContentContainer.append(...hourlyContent);
}
function tabLabeler() {
  const days = getDays();
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(tab => {
    tab.textContent = days[tab.dataset.day];
  });
}
function locationChangeToggle() {
  const locationInput = document.querySelector('.locationInput input');
  const locationInputDiv = document.querySelector('.locationInput');
  locationInputDiv.classList.toggle('hidden');

  locationInput.select();
}
export function locationChangeButtonsInit() {
  const locationText = document.querySelector('.location');
  locationText.addEventListener('click', () => locationChangeToggle());
  const locationInput = document.querySelector('.locationInput input');
  locationInput.value = locationText.textContent;
  const locationInputButton = document.querySelector('.locationInput button');
  locationInputButton.addEventListener('click', () => {
    init(locationInput.value);
    locationChangeToggle();
    // locationInput.value = locationText.textContent;
  })
}

export async function init(location = 'nottingham') {
  //days: 0=today, 1=tomorrow, 2=day after
  const forecast = await getForecast(location);
  tabEventListeners(forecast); //attach event listeners to tabs.
  tabLabeler();
  tabSwitcher(0, forecast);
}