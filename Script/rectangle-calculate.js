function calculateRectangleArea() {
  //  get triangle base value
  const rectangleBaseInput = document.getElementById("rectangle-base");
  const rectangleBaseText = rectangleBaseInput.value;
  const base = parseFloat(rectangleBaseText);
  //   console.log(base);

  //   get triangle Height value
  const rectangleHeighBase = document.getElementById("rectangle-height");
  const rectangleWeightText = rectangleHeighBase.value;
  const height = parseFloat(rectangleWeightText);
  //   console.log(height);

  // Calculate triangle area
  const area = base * height;
  console.log("Total Area :", area);

  //   disply triangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
