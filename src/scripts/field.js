const growingPlants = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const item of seedObject) {
            growingPlants.push(item)
        }
    } else {
        growingPlants.push(seedObject)
    }
}

export const usePlants = () => {
    return growingPlants
}