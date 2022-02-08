import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const seedFailed = "A seed object failed to populate."

export const plantSeeds = (plantPlan) => {
    for (const row of plantPlan) {
        for (const plotDesignation of row) {
            if (plotDesignation === "Asparagus") {
                addPlant(createAsparagus())
            } else if (plotDesignation === "Corn") {
                addPlant(createCorn())
            } else if (plotDesignation === "Potato") {
                addPlant(createPotato())
            } else if (plotDesignation === "Soybean") {
                addPlant(createSoybean())
            } else if (plotDesignation === "Sunflower") {
                addPlant(createSunflower())
            } else if (plotDesignation === "Wheat") {
                addPlant(createWheat())
            } else {
                console.log(seedFailed)
            }
        }
    }
}