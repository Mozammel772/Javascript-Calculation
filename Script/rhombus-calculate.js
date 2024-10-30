function calculateRhombusArea() {
  const rhombusBase = getInputField("rhombus-base");
  const rhombusHeight = getInputField("rhombus-height");

  // area
  const area = 0.5 * rhombusBase * rhombusHeight;

  // input text
  const rhombusText = document.getElementById("rhombus-area");
  rhombusText.innerText = area;
}

// Common Function for Input Field
function getInputField(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const base = parseFloat(inputValue);
  return base;
}
