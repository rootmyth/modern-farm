import { addPlant, usePlants } from "./field"

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