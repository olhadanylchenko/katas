function grid(seedCount) {
  const square = [];
  const sqrt = Math.sqrt(seedCount);
  if (sqrt % 1 === 0) {
    square.push(sqrt, sqrt);
  } else {
    square.push(Math.round(sqrt), Math.ceil(sqrt));
  }
  console.log(square);
  /* Enter your solution here! */
}
grid(21); //[3,3]

const plant_1 = {
  gardenLocation: [1, 1],
  needsWater: true,
};
const plant_2 = {
  gardenLocation: [1, 2],
  needsWater: false,
};

const plant_3 = {
  gardenLocation: [2, 1],
  needsWater: false,
};

const plant_4 = {
  gardenLocation: [2, 2],
  needsWater: true,
};

const plants = [plant_1, plant_2, plant_3, plant_4];

function whereToWater(plantsArray) {
  return plantsArray
    .filter((plant) => plant.needsWater)
    .map((plant) => plant.gardenLocation);
  /* Enter your solution here! */
}

whereToWater(plants);
