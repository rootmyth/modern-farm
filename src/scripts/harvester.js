const newPlantArray = []

export const harvestPlants = (plantArray) => {
    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                newPlantArray.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                newPlantArray.push(plant)
            }
        }
    }
    return newPlantArray
}