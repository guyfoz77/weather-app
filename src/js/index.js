import { getForecast } from "./getData";
import { init, locationChangeButtonsInit } from "./domController";
import "../style/style.css";


init();
locationChangeButtonsInit();

console.log(getForecast('nottingham'))