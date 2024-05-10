// Main entry point for the app
import { initMenu } from './display';
import { initLocation } from './location';
import './style.css';
import { getForecasts } from './weather-api';

initMenu();
initLocation();
getForecasts();
