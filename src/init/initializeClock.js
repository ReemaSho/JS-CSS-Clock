'use strict';
import { setTheHTMLForTheClock } from '../views/clockViews.js';

const initializeClock = () => {
  setTheHTMLForTheClock();
  animateTheClockHands();
};
window.addEventListener('load', initializeClock);

const setTheSecondsHand = () => {
  const secondHand = document.querySelector('.second-hand');
  const now = new Date();
  const seconds = now.getSeconds();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

const setTheMinutesHand = () => {
  const minutesHand = document.querySelector('.min-hand');
  const now = new Date();

  const minutes = now.getMinutes();

  const minutesDegrees = (minutes / 60) * 360 + 90;

  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
};

const setTheHoursHand = () => {
  const hoursHand = document.querySelector('.hour-hand');
  const now = new Date();
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;

  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

const animateTheClockHands = () => {
  setInterval(setTheSecondsHand, 1000);
  setInterval(setTheMinutesHand, 1000);
  setInterval(setTheHoursHand, 1000);
};
