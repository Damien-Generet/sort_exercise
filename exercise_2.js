// array = [3, 7, 8, 3, 6, 1];
array = [1, 4, 5, 8];

let countWestOrientatedN2Complexity = (array) => {
    let noViewBuildingCount = 0;

    for (let i=array.length-2; i >= 0; i--) { // take one building from the initial array
        // premier tour de boucle, i = 2 donc => valeur = 5

        for (let j=i+1; j < array.length; j++) { // check one by one the buildings on its right (those further to the west)
            // 1er tour j vaut 3 donc valeur = 8
            if (array[i] < array[j]) { // if a building on the west is higher than our building, then we break the loop since our building doesn't have a view on the west
                noViewBuildingCount++
                break;
            }
        }
        // otherwise, all the buildings further to the west are smaller than our building
    }
    
    return (array.length - noViewBuildingCount);
}

console.log(`The number of buildings with a view on the West is ${countWestOrientatedN2Complexity(array)}`);