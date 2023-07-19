const inputRange = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

function controlFontSize() {
    textInput.style.fontSize = inputRange.value + "px";
}

controlFontSize();

inputRange.addEventListener('input', controlFontSize);

