import { initLocation } from './location';
import './style.css';

const dropDownIcon = document.getElementById('drop-down');
const menuOptions = document.querySelector('.menu-options');
let dropDownOpen = true;
dropDownIcon.addEventListener('click', () => {
  toggleDropDown();
});

function toggleDropDown() {
  dropDownOpen = dropDownOpen ? false : true;

  if (dropDownOpen) {
    menuOptions.style.display = 'none';
  } else {
    menuOptions.style.display = 'block';
  }
}

initLocation();
