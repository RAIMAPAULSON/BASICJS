function areaAndPerimeter(L1, B1, L2, B2) {
  const area1 = L1 * B1;
  const area2 = L2 * B2;
  const perimeter1 = 2 * (L1 + B1);
  const perimeter2 = 2 * (L2 + B2);
  console.log(area1>area2);
  console.log(perimeter1>perimeter2);
}
areaAndPerimeter(1, 2, 2, 3);