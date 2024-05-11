// Main entry point for the app
import { initMenu } from './display';
import { getBackgroundImage } from './giphy';
import { initLocation } from './location';
import './style.css';
import { getForecasts } from './weather-api';

initMenu();
initLocation();
