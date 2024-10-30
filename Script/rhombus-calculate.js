function calculateRhombusArea() {
  const rhombusBase = getInputField("rhombus-base");
  const rhombusHeight = getInputField("rhombus-height");

  // area
  const area = 0.5 * rhombusBase * rhombusHeight;

  // input text
  textArea("rhombus-area", area);
}

// Common Function for Input Field
function getInputField(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const base = parseFloat(inputValue);
  return base;
}

// text function

function textArea(textId, area) {
  const text = document.getElementById(textId);
  text.innerText = area;
}
