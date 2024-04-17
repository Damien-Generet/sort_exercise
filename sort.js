
const fs = require('fs');
const fileName = process.argv[2];

let data;

// Read the data file
try {
    data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
} catch (error) {
    console.error(error.message);
}

// Define the parsing function to turn the string into an array of integers
let parseData = (data) => {
    let parsedData = data.split(" ").map((element) => parseInt(element));
    return parsedData;
};

// SORT BY BUBBLE SORT ----------------------------------------------------------------------------
let parsedData = parseData(data)
let bubbleSorting = (array, n, comparisons) => {
    if (n==0) {
        return array, comparisons
    }

    for (i = 0; i < n-1; i++) { // 1st iteration => n = parsedData.length (5)
        comparisons++;
        if(array[i] > array[i + 1]) {
            const temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
   return bubbleSorting(array, n-1, comparisons);
}

let sortedData, comparisons = bubbleSorting(parsedData, parsedData.length, 0)
console.log(`The bubble sorting returns ${sortedData} after ${comparisons} comparisions`)
// console.log(`Voici l'array trié en Bubble sort avec  : ${bubbleSorting(parsedData, parsedData.length, 0)}`);

// SORT BY INSERTIONS----------------------------------------------------------------------------
// x, y, z, k

let insertionSorting = (array) => {
    for(let i = 1; i < array.length; i++){
        let temp = array[i]
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
};

// console.log(insertionSorting(parsedData))

// SORT BY SELECTION SORT ------------------------------------------------------------------

function selectionSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return array;
}

// console.log(selectionSort(parsedData))


// SORT BY QUICKSORT ----------------------------------------------------------------------
function pivotSort(array) {
    if(array.length <= 1){
        return array
    }
    const pivot = array[0]
    const left = []
    const right = []

    for(let i = 1; i < array.length; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        } else {
            right.push(array[i])
        }
    }

    return [...pivotSort(left), pivot, ...pivotSort(right)]
}

// console.log(pivotSort(parsedData))

