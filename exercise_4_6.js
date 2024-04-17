// array = [3, 7, 8, 3, 6, 1];
array = [1, 4, 5, 8];

let countWestOrientated = (array) => {
    let buildingCount = 1;
    let biggestBuilding = array.slice(-1)
    console.log(`First building has ${biggestBuilding} floors`)
    
    for (let i=array.length-2; i >= 0; i--) {
        console.log(`Checking building with ${array[i]} floors`)
        console.log(`Biggest building has ${biggestBuilding} floors`)
        if(biggestBuilding < array[i]) {
            biggestBuilding = array[i]
            buildingCount++;
        }
    }
    
    return buildingCount;
}

console.log(countWestOrientated(array))