const fieldPlants = []

const addPlant = (seedObj) => {
    fieldPlants.push(seedObj)
}

const usePlant = () => {
    return fieldPlants
}

addPlant(Avocado)
usePlant()

console.log(fieldPlants)