const boxes = document.querySelectorAll('.box');
const colours = document.querySelectorAll('#colours div');
let currentColour = '66, 66, 66';
const rgbAlpha = /[0-9].[0-9][0-9]/
// we use the .forEach method to iterate through each button
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

colours.forEach((colour) => {
  colour.addEventListener('click', () => {
    currentColour = getBackgroundColour(colour);
    currentColour = currentColour.replace('rgb(', '').replace(')', '');
  });
});

function getBackgroundColour(element) {
  return window.getComputedStyle(element).getPropertyValue('background-color');
}