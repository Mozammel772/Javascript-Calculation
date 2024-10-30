function calculateParallelogramArea() {
  const parallelogramBase = getInputValue("parallelogram-base");
  const parallelogramHeight = getInputValue("parallelogram-height");

  // parallelogram area
  const parallelogramArea = parallelogramBase * parallelogramHeight;
  console.log(parallelogramArea);

  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = parallelogramArea;
}

// Common Function for Input Field
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const base = parseFloat(inputValue);
  return base;
}
