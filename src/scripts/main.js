console.log("Welcome to the main module")


// Importing the seeds
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// Creating the seeds
createAsparagus()
createCorn()
createPotato()
createSoybean()
createSunflower()
createWheat()

// vvvvvvv UNCOMMENT BELOW TO VERIFY SEEDS ARE IMPORTING AND RETURNING PROPERLY vvvvvvv //

// const seedGroup = [
//     createAsparagus(),
//     createCorn(),
//     createPotato(),
//     createSoybean(),
//     createSunflower(),
//     createWheat()
// ]
// console.log(seedGroup)

// ^^^^^^ UNCOMMENT ABOVE TO VERIFY SEEDS ARE IMPORTING AND RETURNING PROPERLY ^^^^^^^ //