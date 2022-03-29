const boxes = document.querySelectorAll('.box');
const colours = document.querySelectorAll('#colours div');
let currentColour = null;
const rgbAlpha = /[0-9].[0-9][0-9]/
// we use the .forEach method to iterate through each button
boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    let rgba = window.getComputedStyle(box).getPropertyValue('background-color');
    let current_rgba = parseFloat(rgba.match(rgbAlpha));
    if (current_rgba < 1.0) {
    new_rgba = current_rgba + 0.1
    box.style.backgroundColor = `rgba(0, 0, 0, ${new_rgba})`
    console.log(new_rgba)
    };
  });
});

colours.forEach((colour) => {
  colour.addEventListener('click', () => {
    currentColour = window.getComputedStyle(colour).getPropertyValue('background-color');
    console.log(currentColour)
  });
});