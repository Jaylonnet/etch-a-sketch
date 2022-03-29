const boxes = document.querySelectorAll('.box');
const colours = document.querySelectorAll('#colours div');

//default grey rgb values
let currentColour = '66, 66, 66';

//regex to find current alpha value
const rgbAlpha = /[0-9].[0-9][0-9]/

//foreach to set new rgba values on mouseover
boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    let rgba = getBackgroundColour(box);
    let current_rgba = parseFloat(rgba.match(rgbAlpha));
    if (current_rgba < 1.0) {
    new_rgba = current_rgba + 0.1
    box.style.backgroundColor = `rgba(${currentColour}, ${new_rgba})`
    };
  });
});

//event listener to change colour
colours.forEach((colour) => {
  colour.addEventListener('click', () => {
    currentColour = getBackgroundColour(colour);
    currentColour = currentColour.replace('rgb(', '').replace(')', '');
  });
});

//function to get the background colour of an element
function getBackgroundColour(element) {
  return window.getComputedStyle(element).getPropertyValue('background-color');
}