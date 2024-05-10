import { initLocation } from './location';
import './style.css';

const dropDownIcon = document.getElementById('drop-down');
const menuOptions = document.querySelector('.menu-options');
let dropDownOpen = true;
dropDownIcon.addEventListener('click', () => {
  toggleDropDown();
});

dropDownIcon.addEventListener('mouseover', () => {
  displayMenu();
});

dropDownIcon.addEventListener('mouseout', () => {
  hideMenu();
});

function toggleDropDown() {
  dropDownOpen = dropDownOpen ? false : true;

  if (dropDownOpen) {
    hideMenu();
  } else {
    displayMenu();
  }
}

function displayMenu() {
  menuOptions.style.display = 'block';
}

function hideMenu() {
  menuOptions.style.display = 'none';
}

initLocation();
