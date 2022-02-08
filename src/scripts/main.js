console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

// The createPlan function below defines 3 rows of crops to be planted.  In each row, there are 6 plots of land.  Each plot is randomly 
// assigned 1 of 6 possible "seeds" in the form of a string.  Eventually, these strings will produce objects with properties, but upon invoking
// createPlan it is simply an array of three arrays which each contain 6 strings.

const yearlyPlan = createPlan()

console.log(yearlyPlan)

// The plantSeeds function below populates an array with seed objects based on the yearlyPlan rows of strings.  In goes the strings, out comes
// the objects.  Because corn is an array the addPlants function within the plantSeeds function checks for an array and iterates through the two
// objects accordingly.

plantSeeds(yearlyPlan)

const sproutList = usePlants()
console.log(sproutList)

const harvest = harvestPlants(sproutList)
console.log(harvest)

// catalog(harvest)

const paretnHTML = document.querySelector(".container")
paretnHTML.innerHTML = catalog(harvest)