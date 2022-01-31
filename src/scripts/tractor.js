import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const addSeeds = (plantPlan) => {
    for ( const plant of plantPlan ) {
        for ( const item of plant ) {
            if ( item === "Asparagus") {
                createAsparagus()
            } else if (item === "Corn") {
                createCorn()
            } else if (item === "Potato") {
                createPotato()
            } else if (item === "Soybean") {
                createSoybean()
            } else if (item === "Sunflower") {
                createSunflower()
            } else {
                createWheat()
            }
        }
    }
}