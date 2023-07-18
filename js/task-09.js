function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');

buttonColor.addEventListener('click', changeBgColor);

function changeBgColor() {
  let hexColor = getRandomHexColor();
  spanColor.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;

}