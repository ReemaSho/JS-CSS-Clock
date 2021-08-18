'use strict';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';

export const setTheHTMLForTheClock = () => {
  const centeredDiv = getDOMElement('user-interface');
  const clockFace = createDOMElement('div');
  clockFace.classList.add('clock-face');
  //create children of clock face
  const hourHand = createDOMElement('div');
  hourHand.classList.add('hand', 'hour-hand');
  const minutesHand = createDOMElement('div');
  minutesHand.classList.add('hand', 'min-hand');
  const secondsHand = createDOMElement('div');
  secondsHand.classList.add('hand', 'second-hand');
  //append children
  clockFace.append(hourHand, minutesHand, secondsHand);
  //append clockFace to the DOM
  centeredDiv.appendChild(clockFace);
};
