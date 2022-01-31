console.log("Welcome to the main module")

import { addPlant } from "./field.js"

import { usePlant } from "./field.js"

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

import { test } from "./field.js"

import { createPlan } from "./plan.js"
// const { createPlan } = require("plan.js")

const yearlyPlan = createPlan()

const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

addPlant(asparagusSeed);
addPlant(cornSeed);
addPlant(potatoSeed);
addPlant(soybeanSeed);
addPlant(sunflowerSeed);
addPlant(wheatSeed);

const plankton = usePlant()

// console.log(yearlyPlan)
// import { createCorn } from "./seeds/corn.js"

// const cornSeed = createCorn()
// console.log(cornSeed)

// import { createWheat } from "./seeds/wheat.js"

// const wheatSeed = createWheat()
// console.log(wheatSeed)

console.log(plankton)
console.log(yearlyPlan)