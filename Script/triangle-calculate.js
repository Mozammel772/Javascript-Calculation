function calculateTriangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  //   console.log(base);

  //   get triangle Height value
  const triangleHeighBase = document.getElementById("triangle-height");
  const triangleWeightText = triangleHeighBase.value;
  const height = parseFloat(triangleWeightText);
  //   console.log(height);

  // Calculate triangle area
  const area = 0.5 * base * height;
  console.log("Total Area :", area);

  //   disply triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}
