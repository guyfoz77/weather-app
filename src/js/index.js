import { getForecast } from "./getData";
import { init } from "./domController";
import "../style/style.css";

init();

console.log(getForecast('nottingham'))

