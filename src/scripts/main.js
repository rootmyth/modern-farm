console.log("Welcome to the main module")

// The createPlan() function below defines 3 rows of crops to be planted.  In each row, there are 6 plots of land.  Each plot is randomly 
// assigned 1 of 6 possible "seeds" in the form of a string.  Eventually, these strings will produce objects with properties, but upon invoking
// createPlan it is simply an array of three arrays which each contain 6 strings.
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()

//console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat} from "./seeds/wheat.js"

console.log(createAsparagus())
console.log(createCorn())
console.log(createPotato())
console.log(createSoybean())
console.log(createSunflower())
console.log(createWheat())

