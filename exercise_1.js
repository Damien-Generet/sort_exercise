const fs = require('fs');
const { parse } = require('path');
const fileName = process.argv[2];
let data;
// Read the data file
try {
    data = fs.readFileSync(fileName, 'utf8');
    // console.log(data);
} catch (error) {
    console.error(error.message);
}
// Define the parsing function to turn the string into an array of integers
let parseData = (data) => {
    let parsedData = data.split(" ").map((element) => parseInt(element));
    return parsedData;
};
let parsedData = parseData(data)


// ------------------------------------------------------

const checkSum = (array, k) => {
    // parcourir la liste deux a deux
    // faire somme des elements et comparer a k
    // si somme == k alors on retourne true

    for (let i=0; i < array.length; i++) {
        
        for (let j=i+1; j < array.length; j++) {
            let sum = array[i] + array[j]
            console.log(`Summing ${array[i]} with ${array[j]} equals ${sum}`)
            
            if (sum === k) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkSum(parsedData, 150));