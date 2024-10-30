// Triangle
function calculateTriangleArea() {
  const triangleBase = getInputfieldById("triangle-base");
  const triangleHeight = getInputfieldById("triangle-height");
  //   area
  const area = 0.5 * triangleBase * triangleHeight;
  // text
  getTextField("triangle-area", area);
}

// rectangle
function calculateRectangleArea() {
  const rectangleBase = getInputfieldById("rectangle-base");
  const rectangleHeight = getInputfieldById("rectangle-height");
  // area
  const area = rectangleBase * rectangleHeight;
  // text
  getTextField("rectangle-area", area);
}
// parallelogram
function calculateParallelogramArea() {
  const parallelogramBase = getInputfieldById("parallelogram-base");
  const parallelogramheight = getInputfieldById("parallelogram-height");
  // area
  const area = parallelogramBase * parallelogramheight;
  // text
  getTextField("parallelogram-area", area);
}
// pentagon
function calculatePentagonArea() {
  const pentagonBase = getInputfieldById("pentagon-base");
  const pentagonheight = getInputfieldById("pentagon-height");
  // area
  const area = pentagonBase * pentagonheight;
  // text
  getTextField("pentagon-area", area);
}
// ellipse
function calculateEllipseArea() {
  const ellipseBase = getInputfieldById("ellipse-base");
  const ellipseheight = getInputfieldById("ellipse-height");
  // area
  const area = 3.14 * ellipseBase * ellipseheight;
  // text
  getTextField("ellipse-area", area);
}
// Common Function

function getInputfieldById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const values = parseFloat(inputValue);
  return values;
}

// text Function

function getTextField(textId, areas) {
  const textArea = document.getElementById(textId);
  textArea.innerText = areas;
}
